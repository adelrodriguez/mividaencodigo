import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark,
};

const PostTemplate = ({ data }: Props) => {
  const { description: siteDescription, author } = useSiteMetadata();
  const { title, description: postDescription } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteDescription;

  return (
    <Layout title={title} description={metaDescription} author={author}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
        readingTime {
          minutes
        }
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`;

export default PostTemplate;
