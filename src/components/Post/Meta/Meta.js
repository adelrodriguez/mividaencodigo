// @flow
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import Icon from '../../Icon';
import type { ReadingTime } from '../../../types';

type Props = {
  date: string,
  time: ReadingTime,
};

const Meta = ({ date, time }: Props) => {
  const { minutes } = time;

  return (
    <div className={styles['meta']}>
      <div className={styles['meta__container']}>
        <Icon className={styles['meta__icon']} icon={['far', 'calendar']} />
        <span>{moment(date).locale('es-do').format('LL, h:mm A')}</span>
      </div>
      <div className={styles['meta__container']}>
        <Icon className={styles['meta__icon']} icon={['far', 'clock']} />
        <span>Apróx. {Math.round(minutes)} min{minutes > 1 && 's'}</span>
      </div>
    </div>
  );
};

export default Meta;
