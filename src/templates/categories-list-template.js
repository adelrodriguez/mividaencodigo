// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const CategoriesListTemplate = () => {
  const { title, description, author } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout
      title={`Categorías - ${title}`}
      description={description}
      author={author}
    >
      <Sidebar />
      <Page title="Categorías">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/categorias/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
