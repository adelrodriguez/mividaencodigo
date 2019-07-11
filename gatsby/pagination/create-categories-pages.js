'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (category) => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    const slug = `/categorias/${_.kebabCase(category.fieldValue)}`;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? slug : `${slug}/${i + 1}`,
        component: path.resolve('./src/templates/category-template.js'),
        context: {
          category: category.fieldValue,
          currentPage: i + 1,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? slug : `${slug}/${i}`,
          nextPagePath: i <= 1 ? `${slug}/${i + 2}` : `${slug}/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
          numPages,
        },
      });
    });
  });
};
