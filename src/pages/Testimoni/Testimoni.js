/* eslint-disable react/jsx-max-depth */
import React from 'react';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Testimoni() {
  DocumentBackground(`url(${IMAGES.BG_BASE})`);
  const listTestimoni =[
    {
      img: IMAGES.HUMAN,
      name: 'Irman Juliansyah',
      role: 'Backend Developer',
      testi: 'DEV itu berasa rumah, orang-orangnya asik, tapi tetap up to date dengan perkembangan teknologi karena stack teknologi yang digunakan juga high.'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Hamdan Prakoso',
      role: 'Frontend Developer',
      testi: 'For me, its been more than a couple of years working with DEV. DEV provides me with such a conducive and employee-friendly work environment. DEV encourages us to have a balance between work, play, and pray. It also provides a platform to enhance our knowledge and skills via sharing sessions with peers and the leader. I feel very gratified and glad to be associated with DEV.'
    },
    {
      img: IMAGES.HUMAN,
      name: 'M. Rizky Pratama',
      role: 'Quality Assurance',
      testi: 'Telkom DEV memberikan pengalaman dan pembelajaran yang luar biasa. Selain mengerjakan pekerjaan, di sini kita dapat berkembang. Senior di DEV bisa membimbing dan mengarahkan  kita untuk lebih berkembang. Anak-anak DEV juga asik. Serius saat kerja, santai di luar kerja.'
    },
    {
      img: IMAGES.HUMAN,
      name: 'Irman Juliansyah',
      role: 'Backend Developer',
      testi: 'Telkom DEV memberikan pengalaman dan pembelajaran yang luar biasa. Selain mengerjakan pekerjaan, di sini kita dapat berkembang. Senior di DEV bisa membimbing dan mengarahkan  kita untuk lebih berkembang. Anak-anak DEV juga asik. Serius saat kerja, santai di luar kerja.'
    },
  ];

  return (
    <div className={styles['testimoni-content']}>
      <h2>Testimoni</h2>
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>
                 adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  ut labore et dolore magna aliqua. </p>
          <div>
            <img alt="" src={IMAGES.ILUSTRATION_TESTIMONI}/>
          </div>
        </div>
        <article>
          {listTestimoni.map((data, index) => (
            <div className={styles['card-testimoni']} key={index}>
              <div>
                <img alt="" src={data.img}/>
                <div>
                  <p>{data.name}</p>
                  <p>{data.role}</p>
                </div>
              </div>
              <div>
                <p>{data.testi}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
