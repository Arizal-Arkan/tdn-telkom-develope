import React from 'react';
import Webp from '../../components/elements/Webp';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';
import { useMediaQuery } from 'react-responsive';

export default function Partner() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground(`img-bg-base`);

  if (isMobile) {
    DocumentBackground(`img-bg-base`);
  }

  const listPartner = [
    {
      img: IMAGES.TELKOMSEL,
      name: 'Telkomset',
    },
    {
      img: IMAGES.METRANET,
      name: 'Metranet',
    },
    {
      img: IMAGES.TELKOMMETRA,
      name: 'Telkommetra',
    },
    {
      img: IMAGES.MITRATEL,
      name: 'MITRATEL',
    },
    {
      img: IMAGES.PINS,
      name: 'PINS',
    },
    {
      img: IMAGES.PROPERTY,
      name: 'Telkom Property',
    },
    {
      img: IMAGES.TELKOMSAT,
      name: 'Telkomsat',
    },
    {
      img: IMAGES.TELIN,
      name: 'Josh',
    },
    {
      img: IMAGES.TELKOMAKSES,
      name: 'Telkomakses',
    },
    {
      img: IMAGES.JALIN,
      name: 'Jalin',
    },
    {
      img: IMAGES.INFRA,
      name: 'Telkom infra',
    },
  ];

  return (
    <div className={styles['partner-content']}>
      <div>
        {isMobile ? (
          <div>
            <Webp alt="" classImg={styles['img-mobile']} name="img-partner" />
          </div>
        ) : null}
        <h2>Partnership</h2>
        <div>
          {listPartner.map((data, index) => (
            <div key={index}>
              <img alt={data.name} src={data.img} />
            </div>
          ))}
        </div>
      </div>
      {!isMobile ? (
        <div>
          <Webp alt="" classImg={styles['img-partner']} name="img-partner" />
        </div>
      ) : null}
    </div>
  );
}
