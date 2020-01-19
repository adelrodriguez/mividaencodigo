// @flow
import React from 'react';

import Item from '../Item';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges,
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <Item edge={edge} key={edge.node.fields.slug} />
    ))}
  </div>
);

export default Feed;
