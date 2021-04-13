import React from 'react';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Project() {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);
  const pic = [
    {
      img: IMAGES.UMEETME,
      name: 'umeetme'
    },
    {
      img: IMAGES.PEDULI,
      name: 'peduli lindungi'
    },
    {
      img: IMAGES.INDIHOME,
      name: 'indihome'
    },
    {
      img: IMAGES.BONUM,
      name: 'bonum'
    },
    {
      img: IMAGES.MYCARRIER,
      name: 'my carrier'
    },
    {
      img: IMAGES.CHAT,
      name: 'chatAja'
    },
    {
      img: IMAGES.AGGREMARKET,
      name: 'agree'
    },
    {
      img: IMAGES.AGGREPARTNER,
      name: 'agree'
    },
    {
      img: IMAGES.AGGREMODAL,
      name: 'agree'
    },
    {
      img: IMAGES.MYINDIHOME,
      name: 'my indihome'
    },
    {
      img: IMAGES.MYPERTAMINA,
      name: 'my pertamina'
    },
    {
      img: IMAGES.DIGIBIZ,
      name: 'mydigibiz'
    },
    {
      img: IMAGES.MYTDS,
      name: 'mytds'
    },
    {
      img: IMAGES.INDIBOX,
      name: 'indibox'
    },
    {
      img: IMAGES.USEETV,
      name: 'USEETV'
    },
    {
      img: IMAGES.QREN,
      name: 'QREN'
    },
    {
      img: IMAGES.LOGETRANS,
      name: 'LOGEE'
    },
    {
      img: IMAGES.LOGEORDER,
      name: 'LOGEE'
    },
    {
      img: IMAGES.PIJARMAHIR,
      name: 'PIJAR'
    },
    {
      img: IMAGES.PIJARSEKOLAH,
      name: 'PIJAR'
    },
  ];

  return (
    <div className={styles['project-content']}>
      <div>
        <h2>Project</h2>
        <p>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
    eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div>
          {pic.map((data, index) => (
            <div key={index}>
              <img alt={data.name} src={data.img}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img alt="" src={IMAGES.ILUSTRATION_PROJECT}/>
      </div>
    </div>
  );
}
