// @flow
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './About.module.scss';

type Props = {
  info: {
    title: string,
    description: string,
    logo: string
  },
  isIndex: ?boolean
};

const About = ({ info, isIndex }: Props) => (
  <div className={styles['about']}>
    <Link to="/">
      <img
        src={withPrefix(info.logo)}
        className={styles['about__logo']}
        width="75"
        height="75"
        alt={info.title}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['about__title']}>
        <Link className={styles['about__title-link']} to="/">{info.title}</Link>
      </h1>
    ) : (
      <h2 className={styles['about__title']}>
        <Link className={styles['about__title-link']} to="/">{info.title}</Link>
      </h2>
    )}
    <p className={styles['about__description']}>{info.description}</p>
  </div>
);

export default About;
