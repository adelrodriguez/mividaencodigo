// @flow
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';

library.add(fab, fas, far);

type Props = {
  icon: string | ?string[],
  className?: string,
};

const Icon = ({ icon, className = '' }: Props) => (
  <FontAwesomeIcon icon={icon} className={`${styles['icon']} ${className}`} />
);

export default Icon;
