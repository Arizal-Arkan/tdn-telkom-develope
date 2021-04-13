import React from 'react';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Partner() {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);

  const listPartner = [
    {
      img: IMAGES.TELKOMSEL,
      name: 'Telkomset'
    },
    {
      img: IMAGES.METRANET,
      name: 'Metranet'
    },
    {
      img: IMAGES.TELKOMMETRA,
      name: 'Telkommetra'
    },
    {
      img: IMAGES.MITRATEL,
      name: 'MITRATEL'
    },
    {
      img: IMAGES.PINS,
      name: 'PINS'
    },
    {
      img: IMAGES.PROPERTY,
      name: 'Telkom Property'
    },
    {
      img: IMAGES.TELKOMSAT,
      name: 'Telkomsat'
    },
    {
      img: IMAGES.TELIN,
      name: 'Josh'
    },
    {
      img: IMAGES.TELKOMAKSES,
      name: 'Telkomakses'
    },
    {
      img: IMAGES.JALIN,
      name: 'Jalin'
    },
    {
      img: IMAGES.INFRA,
      name: 'Telkom infra'
    },
  ];

  return (
    <div className={styles['partner-content']}>
      <div>
        <h2>Partnership</h2>
        <div>
          {listPartner.map((data, index) => (
            <div key={index}>
              <img alt={data.name} src={data.img}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img alt="" src={IMAGES.ILUSTRATION_PARTNER} />
      </div>
    </div>
  );
}
