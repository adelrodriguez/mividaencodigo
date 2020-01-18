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
          fixed(height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `,
  );

  return (
    <div className={styles['author']}>
      <Image fixed={photo.fixed} className={styles['author__image']} alt={author.name} />
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Encuéntrame en <strong>Twitter</strong>.
        </a>
      </p>
    </div>
  );
};

export default Author;
