// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';
import image from '../../../static/logo.png';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  author: {
    name: string,
  },
};

const Layout = ({ children, title, description, author }: Props) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();

  return (
    <div className={styles.layout}>
      <Helmet
        htmlAttributes={{ lang: 'es' }}
        titleTemplate={`%s | ${siteTitle}`}
        title={title}
        description={description || siteDescription}
        defaultTitle={siteTitle}
        meta={[
          { name: 'description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: image },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: author.name },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ]}
      />
      {children}
    </div>
  );
};

export default Layout;
