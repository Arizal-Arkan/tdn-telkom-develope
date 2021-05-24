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
          Mencari talenta terbaik bangsa untuk bergabung bersama memberikan
          sentuhan baru pada digital Indonesia. Curahkan semangatmu dengan kami
          CHAPTER DEVELOPER TELKOM INDONESIA, memberi makna bagi bangsa melalui
          inovasi dan kreasi tanpa batas.
        </p>
      ) : (
        <p>
          Mencari talenta terbaik bangsa untuk bergabung bersama <br />
          sentuhan baru pada digital Indonesia. Curahkan <br />
          semangatmu dengan kami CHAPTER DEVELOPER TELKOM <br />
          INDONESIA memberi makna bagi bangsa melalui inovasi <br />
          dan kreasi tanpa batas. <br />
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
