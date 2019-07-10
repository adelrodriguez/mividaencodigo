// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  author: {
    name: string,
  },
};

const Layout = ({
  children, title, description, author,
}: Props) => (
  <div className={styles.layout}>
    <Helmet
      htmlAttributes={{ lang: 'es' }}
      title={title}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    {children}
  </div>
);

export default Layout;
