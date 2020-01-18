// @flow
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import Icon from '../../Icon';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <Icon className={styles['meta__icon']} icon={['far', 'clock']} />
    <span className={styles['meta__date']}>{moment(date).locale('es-do').format('LL, h:mm A')}</span>
  </div>
);

export default Meta;
