// @flow
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();
  const { photo } = useStaticQuery(
    graphql`
      {
        photo: imageSharp(original: { src: { regex: "/adel/" } }) {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `,
  );

  return (
    <div className={styles['author']}>
      <Image fixed={photo.fixed} className={styles['about__logo']} alt={author.name} />
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
