import React from 'react';
import styles from './styles.scoped.css';
import { useHistory } from 'react-router-dom';
import DocumentBackground from '../../utils/DocumentBackground';
import { IMAGES } from './../../configs';

export default function Intro() {
  DocumentBackground(`url(${IMAGES.BG_INTRO})`);
  const history = useHistory();
  return (
    <div className={styles['content-intro']}>
      <div>
        <div>
          <div className={styles.square}/>
        </div>
        <div>
          <div className={styles['btn-start']} onClick={() => history.push('/home')} />
        </div>
      </div>
      <div>
        <img alt="" onClick={() => window.open('https://www.instagram.com/devceria/')} src={IMAGES.INSTAGRAM_DARK}/>
        <img alt="" onClick={() => window.open('https://www.youtube.com/channel/UCA5KKaClnatT5saGcKV8Cjw')} src={IMAGES.YOUTUBE_DARK}/>
      </div>
    </div>
  );
}
