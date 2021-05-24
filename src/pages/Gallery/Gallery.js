import React from 'react';
import Webp from '../../components/elements/Webp';
import styles from './styles.scoped.css';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Gallery() {
  DocumentBackground('img-bg-base');
  const listHuman = [
    {
      img: 'irman',
      name: 'IRMAN JULIANSYAH',
    },
    {
      img: 'josh',
      name: 'JOSH',
    },
    {
      img: 'rizkhi',
      name: 'MOHAMMAD RIZKY PRATAMA',
    },
    {
      img: 'osi',
      name: 'OSI RAHMA',
    },
    {
      img: 'rama',
      name: 'RIZKY RAMADHAN SUBAGIO',
    },
    {
      img: 'encep',
      name: 'ENCEP HAMZAH FAIZAL RAMADHAN',
    },
    {
      img: 'nyassa',
      name: 'NYSSA RAMADHATI',
    },
    {
      img: 'emy',
      name: 'EMMY TRISNAWATI HUSAIN',
    },
    {
      img: 'hans',
      name: 'HANS CHRISTIAN SARAGIH',
    },
    {
      img: 'ridwan',
      name: 'AHMAD RIDWAN',
    },
    {
      img: 'ramadhan',
      name: 'DIMAS RAMADHAN AMRULLOH',
    },
    {
      img: 'khadam',
      name: 'KHADAM IKHWANUS SHOFA',
    },
    {
      img: 'roni',
      name: 'RONY SETYAWAN',
    },
    {
      img: 'rifaldi',
      name: 'RIFALDI RIZQI PRATAMA',
    },
    {
      img: 'aljiro',
      name: 'AHMAD SARJONO ALJIRO',
    },
    {
      img: 'alif',
      name: 'ALIF SEPTIAN NURDIANTO',
    },
    {
      img: 'ger',
      name: 'GERALDY MARTIN PANGABEAN',
    },
    {
      img: 'faishal',
      name: 'PERDANA FAISHAL MULHAQ',
    },
    {
      img: 'bentar',
      name: 'BENTAR SEPTIAN',
    },
    {
      img: 'ayubi',
      name: 'AYU BINTANG NURRACHMA GUNAWAN',
    },
  ];

  return (
    <div className={styles['gallery-content']}>
      <h2>Gallery</h2>
      <div>
        {listHuman.map((data, index) => (
          <div key={index}>
            <Webp alt="" classImg={styles['img-gallery']} name={data.img} />
            <div>
              <p>{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
