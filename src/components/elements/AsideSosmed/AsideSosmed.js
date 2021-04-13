import React from 'react';
import { IMAGES } from '../../../configs';
import styles from './styles.scoped.css';

export default function AsideSosmed() {
  return (
    <aside className={styles['aside-left']}>
      <div>
        <img alt="" onClick={() => window.open('https://www.instagram.com/devceria/')} src={IMAGES.INSTAGRAM}/>
        <img alt="" onClick={() => window.open('https://www.youtube.com/channel/UCA5KKaClnatT5saGcKV8Cjw')} src={IMAGES.YOUTUBE}/>
      </div>

      <div>
        <img alt="" src={IMAGES.VERTICAL_LINE}/>
      </div>
    </aside>
  );
}
