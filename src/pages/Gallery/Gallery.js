import React from 'react';
import { IMAGES } from '../../configs';
import styles from './styles.scoped.css';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Gallery () {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);
  const listHuman = [
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Josh'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Lorem ipsum'
    },
  ];

  return (
    <div className={styles['gallery-content']}>
      <h2>Gallery</h2>
      <div>
        {listHuman.map((data, index) => (
          <div key={index}>
            <img alt="" src={data.img}/>
            <div><p>{data.name}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
