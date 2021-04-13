/* eslint-disable react/jsx-max-depth */
import React from 'react';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';
import DocumentBackground from './../../utils/DocumentBackground';

export default function Contact() {
  DocumentBackground(`url(${IMAGES.BG_CONTACT})`);

  const toMap = (locate) => {
    if (locate === 'kalibata') {
      window.open('https://goo.gl/maps/BTRGjMXj88eKc7AZ8');
    }

    window.open('https://goo.gl/maps/NU7ruJbUYpAEtZYQ8');

  };

  return (
    <div className={styles['contact-content']}>
      <h2>Contact us</h2>

      <div>
        <div>
          <p>Lets join our community</p>

          <div>
            <form action="" className={styles['form-contact']}>

              <div>
                <input className={styles['form-input']} placeholder=" " type="text"/>
                <label className={styles['form-label']} htmlFor="">Name</label>
              </div>
              <div>
                <input className={styles['form-input']} placeholder=" " type="text"/>
                <label className={styles['form-label']} htmlFor="">Email Address</label>
              </div>
              <div>
                <input className={styles['form-input']} placeholder=" " type="text"/>
                <label className={styles['form-label']} htmlFor="">No telephone</label>
              </div>

              <input className={styles['form-button']} type="submit" value="Send"/>
            </form>

            <div className={styles['contact-address']}>
              <div>
                <img alt="PIN POINT" src={IMAGES.PIN}/>
                <p onClick={() => toMap('kalibata')}>Dev Camp, STO Kalibata Lantai 2 <br/>
              Jl. Raya Pasar Minggu, RT.13/RW.1, <br/>
              Pejaten Tim., Kec. Ps. Minggu, <br/>
              Kota Jakarta Selatan, Daerah <br/>
              Khusus Ibukota Jakarta 12510</p>
              </div>
              <div>
                <img alt="PIN POINT" src={IMAGES.PIN}/>
                <p onClick={() => toMap('bandung')}>Bandung Digital Valley <br/>
              Digital Valley, 4th Floor Menara <br/>
              Bandung, Jl. Gegerkalong Hilir <br/>
              No.47, Sukarasa, Kec. Sukasari, <br/>
              Kota Bandung, Jawa Barat 40152</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img alt="" src={IMAGES.ILUSTRATION_CONTACT_US}/>
        </div>
      </div>


    </div>
  );
}
