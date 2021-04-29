import React from 'react';
import styles from './styles.scoped.css';
import DocumentBackground from './../../utils/DocumentBackground';
import { IMAGES } from '../../configs';

export default function Profile() {
  DocumentBackground(`url(${IMAGES.BG_PROFILE})`);
  return (
    <div className={styles['profile-content']}>
      <h2>
        About Chapter <br /> Developer
      </h2>
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
      <div>
        <div>
          <img alt="" src={IMAGES.FRIENDS} />
        </div>
      </div>
    </div>
  );
}
