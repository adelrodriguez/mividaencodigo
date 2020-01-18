// @flow
import React from 'react';
import Meta from '../Meta';
import styles from './Content.module.scss';
import type { ReadingTime } from '../../../types';

type Props = {
  body: string,
  title: string,
  date: string,
  time: ReadingTime,
};

const Content = ({
  body, title, date, time,
}: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Meta date={date} time={time} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
