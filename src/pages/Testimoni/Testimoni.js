/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Webp from '../../components/elements/Webp';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';
import { useMediaQuery } from 'react-responsive';

export default function Testimoni() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground(`img-bg-base`);

  if (isMobile) {
    DocumentBackground('img-bg-base-mobile');
  }
  const listTestimoni = [
    {
      img: IMAGES.irman,
      name: 'Irman Juliansyah',
      role: 'Backend Developer',
      testi:
        'DEV itu berasa rumah, orang-orangnya asik, tapi tetap up to date dengan perkembangan teknologi karena stack teknologi yang digunakan juga high.',
    },
    {
      img: IMAGES.hamdan,
      name: 'Hamdan Prakoso',
      role: 'Frontend Developer',
      testi:
        'For me, its been more than a couple of years working with DEV. DEV provides me with such a conducive and employee-friendly work environment. DEV encourages us to have a balance between work, play, and pray. It also provides a platform to enhance our knowledge and skills via sharing sessions with peers and the leader. I feel very gratified and glad to be associated with DEV.',
    },
    {
      img: IMAGES.rizkhi,
      name: 'M. Rizky Pratama',
      role: 'Quality Assurance',
      testi:
        'Telkom DEV memberikan pengalaman dan pembelajaran yang luar biasa. Selain mengerjakan pekerjaan, di sini kita dapat berkembang. Senior di DEV bisa membimbing dan mengarahkan  kita untuk lebih berkembang. Anak-anak DEV juga asik. Serius saat kerja, santai di luar kerja.',
    },
    {
      img: IMAGES.osi,
      name: 'Osi Rahmadita',
      role: 'Quality Assurance',
      testi:
        'Striving a career balance as QA Engineer isnt always easy, but with DEV team i can develop faster. I receive so many interesting challenges to develop my capacities on DEV team.',
    },
  ];

  return (
    <div className={styles['testimoni-content']}>
      {isMobile ? (
        <div className={styles['top-mobile']}>
          {' '}
          <h2>Testimonial</h2>{' '}
          <Webp alt="" classImg={styles['img-mobile']} name="img-testimoni" />
        </div>
      ) : (
        <h2>Testimonial</h2>
      )}
      <div>
        <div>
          <p>
            Yang mereka para developer rasakan <br />
            berbagi dan berkarya di Telkom Chapter Developer.{' '}
          </p>
          {!isMobile ? (
            <div>
              <Webp
                alt=""
                classImg={styles['img-testimoni']}
                name="img-testimoni"
              />
            </div>
          ) : null}
        </div>
        <article>
          {listTestimoni.map((data, index) => (
            <div className={styles['card-testimoni']} key={index}>
              <div>
                <img alt="" src={data.img} />
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
