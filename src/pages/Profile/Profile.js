import React from 'react';
import styles from './styles.scoped.css';
import Webp from '../../components/elements/Webp';
import DocumentBackground from './../../utils/DocumentBackground';
import { useMediaQuery } from 'react-responsive';

export default function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground('img-bg-profile');

  if (isMobile) {
    DocumentBackground(`img-bg-profile-mobile`);
  }
  return (
    <div className={styles['profile-content']}>
      <h2>
        About Chapter <br /> Developer
      </h2>
      {isMobile ? (
        <p>
          "Bagi Ayubi", Telkom DEV adalah tempat paling hangat dengan penuh ilmu
          pengetahuan, keceriaan, pengalaman, dan perasaan seperti ada ditengah
          keluarga. Disini kami saling berbagi dan membantu satu sama lain untuk
          tumbuh bersama.
        </p>
      ) : (
        <p>
          "Bagi Ayubi", Telkom DEV adalah tempat paling hangat dengan <br />
          penuh ilmu pengetahuan, keceriaan, pengalaman, dan perasaan <br />
          seperti ada ditengah keluarga. Disini kami saling berbagi dan <br />
          membantu satu sama lain untuk tumbuh bersama. Keluarga <br />
          Telkom Dev memberikan dukungan penuh untuk tiap anggotanya
          <br />
          menemukan tujuan dan target di kehidupan. Tidak ada lagi kata <br />
          aku jika ada kamu dan aku di Telkom Dev, maka kita adalah <br />{' '}
          keluarga.
        </p>
      )}

      <div>
        <div>
          <Webp
            alt=""
            classImg={
              isMobile ? styles['img-friend-mobile'] : styles['img-friend']
            }
            name={isMobile ? 'img-friends-mobile' : 'img-friends'}
          />
        </div>
      </div>
    </div>
  );
}
