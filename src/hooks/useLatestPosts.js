import { useStaticQuery, graphql } from 'gatsby';

const useLatestPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query LatestPostsQuery {
        allMarkdownRemark(limit: 2, filter: {frontmatter: {template: {eq: "post"}}}, sort: {order: DESC, fields: [frontmatter___date]}) {
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
    `,
  );

  return allMarkdownRemark;
};

export default useLatestPosts;
