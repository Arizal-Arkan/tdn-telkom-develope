import React from 'react';
import { IMAGES } from '../../configs';
import styles from './styles.scoped.css';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Gallery() {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);
  const listHuman = [
    {
      img: IMAGES.irman,
      name: 'IRMAN JULIANSYAH',
    },
    {
      img: IMAGES.josh,
      name: 'JOSH',
    },
    {
      img: IMAGES.rizkhi,
      name: 'MOHAMMAD RIZKY PRATAMA',
    },
    {
      img: IMAGES.osi,
      name: 'OSI RAHMA',
    },
    {
      img: IMAGES.rama,
      name: 'RIZKY RAMADHAN SUBAGIO',
    },
    {
      img: IMAGES.encep,
      name: 'ENCEP HAMZAH FAIZAL RAMADHAN',
    },
    {
      img: IMAGES.nyassa,
      name: 'NYSSA RAMADHATI',
    },
    {
      img: IMAGES.emy,
      name: 'EMMY TRISNAWATI HUSAIN',
    },
    {
      img: IMAGES.hans,
      name: 'HANS CHRISTIAN SARAGIH',
    },
    {
      img: IMAGES.ridwan,
      name: 'AHMAD RIDWAN',
    },
    {
      img: IMAGES.ramadhan,
      name: 'DIMAS RAMADHAN AMRULLOH',
    },
    {
      img: IMAGES.khadam,
      name: 'KHADAM IKHWANUS SHOFA',
    },
    {
      img: IMAGES.roni,
      name: 'RONY SETYAWAN',
    },
    {
      img: IMAGES.rifaldi,
      name: 'RIFALDI RIZQI PRATAMA',
    },
    {
      img: IMAGES.aljiro,
      name: 'AHMAD SARJONO ALJIRO',
    },
    {
      img: IMAGES.alif,
      name: 'ALIF SEPTIAN NURDIANTO',
    },
    {
      img: IMAGES.ger,
      name: 'GERALD GHIBRAN GUNASHA',
    },
    {
      img: IMAGES.faishal,
      name: 'PERDANA FAISHAL MULHAQ',
    },
    {
      img: IMAGES.bagus,
      name: 'BENTAR SEPTIAN',
    },
    {
      img: IMAGES.ayubi,
      name: 'AYU BINTANG NURRACHMA GUNAWAN',
    },
  ];

  return (
    <div className={styles['gallery-content']}>
      <h2>Gallery</h2>
      <div>
        {listHuman.map((data, index) => (
          <div key={index}>
            <img alt="" src={data.img} />
            <div>
              <p>{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
