// @flow
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, description, author } = useSiteMetadata();
  const { photo } = useStaticQuery(
    graphql`
      {
        photo: imageSharp(original: { src: { regex: "/404/" } }) {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `,
  );

  return (
    <Layout title={`404 - ${title}`} description={description} author={author}>
      <Sidebar />
      <Page title="Esa página no existe">
        <p>¡Lo siento! Pero hey, mira. ¡Un panda!</p>
        <Image fixed={photo.fixed} alt="Panda" />
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
