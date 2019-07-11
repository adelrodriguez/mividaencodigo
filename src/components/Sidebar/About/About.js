// @flow
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styles from './About.module.scss';

type Props = {
  info: {
    title: string,
    description: string,
    logo: string
  },
  isIndex: ?boolean
};

const About = ({ info, isIndex }: Props) => {
  const { logo } = useStaticQuery(
    graphql`
      {
        logo: imageSharp(original: {src: {regex: "/logo/"}}) {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `,
  );

  return (
    <div className={styles['about']}>
      <Link to="/">
        <Image
          fixed={logo.fixed}
          className={styles['about__logo']}
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
};

export default About;
