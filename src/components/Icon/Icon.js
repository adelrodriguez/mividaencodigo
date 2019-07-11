// @flow
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';

library.add(fab, fas);

type Props = {
  icon: string | ?string[],
};

const Icon = ({ icon }: Props) => (
  <FontAwesomeIcon icon={icon} className={styles['icon']} />
);

export default Icon;
