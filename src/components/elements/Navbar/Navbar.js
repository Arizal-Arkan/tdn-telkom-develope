import React from 'react';
import { IMAGES } from '../../../configs';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.scoped.css';

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  const isLocation =
    location.pathname === '/contact' ? 'contact-us-active' : 'contact-us';

  const _logoTelkom = () => {
    switch (location.pathname) {
      case '/':
        return '';
      case '/home':
        return <img alt="" src={IMAGES.TELKOM_LOGO_COLOR} />;
      default:
        return (
          <img
            alt=""
            className={styles['logo-mobile']}
            onClick={() => history.push('/')}
            src={IMAGES.TELKOM_LOGO}
          />
        );
    }
  };

  return (
    <nav
      className={
        location.pathname === '/' ? styles['navbar-intro'] : styles.navbar
      }
    >
      <div
        className={
          location.pathname === '/home' ? styles['center-logo'] : styles.logo
        }
      >
        {_logoTelkom()}
      </div>
      <div
        className={
          location.pathname === '/' || location.pathname === '/home'
            ? styles['contact-us-intro']
            : styles[isLocation]
        }
        onClick={() => history.push('/contact')}
      >
        <p>CONTACT US</p>
      </div>
    </nav>
  );
}
