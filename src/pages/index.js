// @flow
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Latest from '../components/Latest';
import Progress from '../components/Progress';
import {
  useSiteMetadata,
  useLatestPosts,
  useTrelloCards,
} from '../hooks';

const Home = () => {
  const { description, author } = useSiteMetadata();
  const latestPosts = useLatestPosts();
  const trelloCards = useTrelloCards();

  return (
    <Layout title="Inicio" description={description} author={author}>
      <Sidebar isIndex />
      <Page>
        <Latest edges={latestPosts.edges} />
        <Progress edges={trelloCards.edges} />
      </Page>
    </Layout>
  );
};

export default Home;
