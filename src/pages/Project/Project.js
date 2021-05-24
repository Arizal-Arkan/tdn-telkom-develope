import React from 'react';
import Webp from '../../components/elements/Webp';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';
import { useMediaQuery } from 'react-responsive';

export default function Project() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground(`img-bg-base`);

  if (isMobile) {
    DocumentBackground(`img-bg-base-mobile`);
  }
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

  const linkHref = (link) => {
    window.open(link);
  };

  return (
    <div className={styles['project-content']}>
      <div>
        {isMobile ? (
          <div>
            <Webp alt="" classImg={styles['img-mobile']} name="img-project" />
          </div>
        ) : null}
        <h2>Project</h2>
        {isMobile ? (
          <p>
            Para developer yang tergabung dalam Chapter Developer Telkom
            Indonesia, sesuai dengan keahlian dan kompetensi mereka, mengambil
            andil dalam pengembangan produk-produk yang merupakan Digital
            Initiatives dari Telkom.
          </p>
        ) : (
          <p>
            Para developer yang tergabung dalam Chapter Developer Telkom
            Indonesia,
            <br />
            sesuai dengan keahlian dan kompetensi mereka, mengambil andil dalam{' '}
            <br />
            pengembangan produk-produk yang merupakan Digital Initiatives dari
            Telkom.
          </p>
        )}

        <div>
          {pic.map((data, index) => (
            <div key={index} onClick={() => linkHref(data.link)}>
              <img alt={data.name} src={data.img} />
            </div>
          ))}
        </div>
      </div>
      {!isMobile ? (
        <div>
          <Webp alt="" className={styles['img-mobile']} name="img-project" />
        </div>
      ) : null}
    </div>
  );
}
