'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);
  const slug = '/entradas';

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? slug : `${slug}/${i + 1}`,
      component: path.resolve('./src/templates/posts-list-template.js'),
      context: {
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
};
