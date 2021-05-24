import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import Navbar from '../elements/Navbar';
import AsideSlider from '../elements/AsideSlider';
import AsideSosmed from '../elements/AsideSosmed';
import AsideMobile from '../elements/AsideMobile';

export default function BaseLayout(props) {
  const { children } = props;
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div
      className={
        location.pathname === '/' || location.pathname === '/home'
          ? styles['main-content-intro']
          : styles['main-content']
      }
    >
      <nav>
        <Navbar />
      </nav>
      {isMobile ? (
        <main
          className={
            location.pathname === '/' || location.pathname === '/home'
              ? styles['root-intro']
              : styles.root
          }
        >
          {children}
          <AsideMobile />
          <AsideSosmed />
        </main>
      ) : (
        <main
          className={
            location.pathname === '/' || location.pathname === '/home'
              ? styles['root-intro']
              : styles.root
          }
        >
          {location.pathname === '/' || location.pathname === '/home' ? null : (
            <AsideSosmed />
          )}
          {children}
          <AsideSlider />
        </main>
      )}
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node,
};

BaseLayout.defaultProps = {
  children: null,
};
