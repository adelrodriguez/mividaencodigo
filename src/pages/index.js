// @flow
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const Home = () => {
  const { title, description, author } = useSiteMetadata();

  return (
    <Layout title={`${title}`} description={description} author={author}>
      <Sidebar />
      <Page>
        <p>Bienvenido a mividaencódigo</p>
      </Page>
    </Layout>
  );
};

export default Home;
