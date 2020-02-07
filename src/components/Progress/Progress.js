import React from 'react';
import type { Edges } from '../../types';
import styles from './Progress.module.scss';

type Props = {
  edges: Edges,
};

const Progress = ({ edges }: Props) => (
  <div className={styles['progress']}>
    <h2 className={styles['progress__title']}>¿Qué estoy aprendiendo?</h2>
    <p>
      Uno de los propósitos de este blog es darle seguimiento a mi crecimiento como Ingeniero de
      Foftware. Y eso significa mucho estudiar, y un aprendizaje constante. Estos son los cursos que
      estoy tomando actualmente:
    </p>
    <ul>
      {edges.map((edge) => (
        <li key={edge.node.id}>
          <div className={styles['progress__course']}>
            <div>
              <a className={styles['progress__course-name']} href={edge.node.url} target='_blank'>
                {edge.node.name}
              </a>
            </div>
            <div className={styles['progress__course-labels']}>
              {edge.node.labels.map((label) => (
                <span className={styles['progress__course-label']} key={label.id}>
                  {label.name}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Progress;
