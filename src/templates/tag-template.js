// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { AllMarkdownRemark, PageContext } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { description, author } = useSiteMetadata();

  const {
    tag, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const title = currentPage > 0
    ? `Todas las entradas etiquetadas como "${tag}" - Página ${currentPage}`
    : `Todas las entradas etiquetadas como "${tag}"`;

  return (
    <Layout title={title} description={description} author={author}>
      <Sidebar />
      <Page title={`Etiqueta: ${tag}`}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { tags: { in: [$tag] }, template: { eq: "post" }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
