// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
};

const PageTemplate = ({ data }: Props) => {
  const { description: siteDescription, author } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { title, description: pageDescription } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteDescription;

  return (
    <Layout title={title} description={metaDescription} author={author}>
      <Sidebar />
      <Page title={title}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;

export default PageTemplate;
