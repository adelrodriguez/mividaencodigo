// @flow
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Latest from '../components/Latest';
import { useSiteMetadata, useLatestPosts } from '../hooks';

const Home = () => {
  const { title, description, author } = useSiteMetadata();
  const { edges } = useLatestPosts();

  return (
    <Layout title={`${title}`} description={description} author={author}>
      <Sidebar />
      <Page>
        <Latest edges={edges} />
      </Page>
    </Layout>
  );
};

export default Home;
