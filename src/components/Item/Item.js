import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import 'moment/locale/es';
import type { Edge } from '../../types';
import styles from './Item.module.scss';

type Props = {
  edge: Edge,
  className?: string,
};

const Item = ({ edge, className = '' }: Props) => (
  <div className={`${styles['item']} ${className}`}>
    <div className={styles['item__meta']}>
      <time
        className={styles['item__meta-time']}
        dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
      >
        {moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
      </time>
      <span className={styles['item__meta-divider']} />
      <span className={styles['item__meta-category']}>
        <Link to={edge.node.fields.categorySlug} className={styles['item__meta-category-link']}>
          {edge.node.frontmatter.category}
        </Link>
      </span>
    </div>
    <h3 className={styles['item__title']}>
      <Link className={styles['item__title-link']} to={edge.node.fields.slug}>
        {edge.node.frontmatter.title}
      </Link>
    </h3>
    <p className={styles['item__description']}>{edge.node.frontmatter.description}</p>
    <Link className={styles['item__readmore']} to={edge.node.fields.slug}>
      Leer más
    </Link>
  </div>
);

export default Item;
