import React from 'react';
import type { Edges } from '../../types';
import styles from './Latest.module.scss';
import Item from '../Item';

type Props = {
  edges: Edges,
};

const Latest = ({ edges }: Props) => (
  <div className={styles['latest']}>
    <h1 className={styles['latest__title']}>¿Qué hay de nuevo?</h1>
    <div className={styles['latest__posts']}>
      {edges.map((edge) => (
        <Item className={styles['latest__posts-item']} edge={edge} />
      ))}
    </div>
  </div>
);

export default Latest;
