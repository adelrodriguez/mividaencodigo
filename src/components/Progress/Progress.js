import React from 'react';
import type { Edges } from '../../types';
import styles from './Progress.module.scss';

type Props = {
  edges: Edges,
};

const Progress = ({ edges }: Props) => (
  <div className={styles['progress']}>
    <h2 className={styles['progress__title']}>¿En qué estoy?</h2>
    <p>
      El propósito de este blog es darle seguimiento a mi crecimiento como ingeniero de software. Y
      eso significa mucho estudiar. Estos son los cursos que estoy tomando actualmente:
    </p>
    <ul>
      {edges.map((edge) => (
        <li key={edge.node.id}>
          <div className={styles['progress__course']}>
            <a className={styles['progress__course-name']} href={edge.node.url} target='_blank'>
              {edge.node.name}
            </a>
            {edge.node.labels.map((label) => (
              <span className={styles['progress__course-label']} key={label.id}>
                {label.name}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Progress;
