import React from 'react';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Project() {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);
  const pic = [
    {
      img: IMAGES.UMEETME,
      name: 'umeetme',
      link: 'https://www.umeetme.id/',
    },
    {
      img: IMAGES.PEDULI,
      name: 'peduli lindungi',
      link: 'https://pedulilindungi.id/',
    },
    {
      img: IMAGES.INDIHOME,
      name: 'indihome',
      link: 'https://indihome.co.id/',
    },
    {
      img: IMAGES.BONUM,
      name: 'bonum',
      link: 'https://indihome.co.id/',
    },
    {
      img: IMAGES.MYCARRIER,
      name: 'my carrier',
    },
    {
      img: IMAGES.CHAT,
      name: 'chatAja',
    },
    {
      img: IMAGES.AGGREMARKET,
      name: 'agree',
    },
    {
      img: IMAGES.AGGREPARTNER,
      name: 'agree',
    },
    {
      img: IMAGES.AGGREMODAL,
      name: 'agree',
    },
    {
      img: IMAGES.MYINDIHOME,
      name: 'my indihome',
    },
    {
      img: IMAGES.MYPERTAMINA,
      name: 'my pertamina',
    },
    {
      img: IMAGES.DIGIBIZ,
      name: 'mydigibiz',
    },
    {
      img: IMAGES.MYTDS,
      name: 'mytds',
    },
    {
      img: IMAGES.INDIBOX,
      name: 'indibox',
    },
    {
      img: IMAGES.USEETV,
      name: 'USEETV',
    },
    {
      img: IMAGES.QREN,
      name: 'QREN',
    },
    {
      img: IMAGES.LOGETRANS,
      name: 'LOGEE',
    },
    {
      img: IMAGES.LOGEORDER,
      name: 'LOGEE',
    },
    {
      img: IMAGES.PIJARMAHIR,
      name: 'PIJAR',
    },
    {
      img: IMAGES.PIJARSEKOLAH,
      name: 'PIJAR',
    },
  ];

  return (
    <div className={styles['project-content']}>
      <div>
        <h2>Project</h2>
        <p>
          Para developer yang tergabung dalam Chapter Developer Telkom
          Indonesia,
          <br />
          sesuai dengan keahlian dan kompetensi mereka, mengambil andil dalam{' '}
          <br />
          pengembangan produk-produk yang merupakan Digital Initiatives dari
          Telkom.
        </p>
        <div>
          {pic.map((data, index) => (
            <div key={index}>
              <img alt={data.name} src={data.img} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <img alt="" src={IMAGES.ILUSTRATION_PROJECT} />
      </div>
    </div>
  );
}
