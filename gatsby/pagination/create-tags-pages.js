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
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (tag) => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);
    const slug = `/etiquetas/${_.kebabCase(tag.fieldValue)}`;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? slug : `${slug}/${i + 1}`,
        component: path.resolve('./src/templates/tag-template.js'),
        context: {
          tag: tag.fieldValue,
          currentPage: i + 1,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? slug : `${slug}/${i}`,
          nextPagePath: `${slug}/${i + 2}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
          numPages,
        },
      });
    });
  });
};
