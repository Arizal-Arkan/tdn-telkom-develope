/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Webp from '../../components/elements/Webp';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';
import { useMediaQuery } from 'react-responsive';

export default function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  DocumentBackground(`img-bg-contact`);

  if (isMobile) {
    DocumentBackground(`img-bg-base-mobile`);
  }

  const toMap = (locate) => {
    if (locate === 'kalibata') {
      window.open('https://goo.gl/maps/BTRGjMXj88eKc7AZ8');
    } else {
      window.open('https://goo.gl/maps/NU7ruJbUYpAEtZYQ8');
    }

    window.open('https://goo.gl/maps/NU7ruJbUYpAEtZYQ8');
  };

  return (
    <div className={styles['contact-content']}>
      {isMobile ? (
        <section>
          <h2>Contact us</h2>
          <Webp alt="" classImg={styles['img-contact']} name="img-contact-us" />
        </section>
      ) : null}
      <div>
        <div>
          <p>Lets join our community</p>
          <div>
            <form action="" className={styles['form-contact']}>
              <div>
                <input
                  className={styles['form-input']}
                  placeholder=" "
                  type="text"
                />
                <label className={styles['form-label']} htmlFor="">
                  Name
                </label>
              </div>
              <div>
                <input
                  className={styles['form-input']}
                  placeholder=" "
                  type="text"
                />
                <label className={styles['form-label']} htmlFor="">
                  Email Address
                </label>
              </div>
              <div>
                <input
                  className={styles['form-input']}
                  placeholder=" "
                  type="text"
                />
                <label className={styles['form-label']} htmlFor="">
                  No telephone
                </label>
              </div>

              <input
                className={styles['form-button']}
                type="submit"
                value="Send"
              />
            </form>

            <div className={styles['contact-address']}>
              <div>
                <img alt="PIN POINT" src={IMAGES.PIN} />
                <p onClick={() => toMap('kalibata')}>
                  Dev Camp, STO Kalibata Lantai 2 <br />
                  Jl. Raya Pasar Minggu, RT.13/RW.1, <br />
                  Pejaten Tim., Kec. Ps. Minggu, <br />
                  Kota Jakarta Selatan, Daerah <br />
                  Khusus Ibukota Jakarta 12510
                </p>
              </div>
              <div>
                <img alt="PIN POINT" src={IMAGES.PIN} />
                <p onClick={() => toMap('bandung')}>
                  Bandung Digital Valley <br />
                  Digital Valley, 4th Floor Menara <br />
                  Bandung, Jl. Gegerkalong Hilir <br />
                  No.47, Sukarasa, Kec. Sukasari, <br />
                  Kota Bandung, Jawa Barat 40152
                </p>
              </div>
            </div>
          </div>
        </div>
        {!isMobile ? (
          <div>
            <Webp
              alt=""
              classImg={styles['img-contact']}
              name="img-contact-us"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
