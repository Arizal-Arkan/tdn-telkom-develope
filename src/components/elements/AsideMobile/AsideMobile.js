import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.scoped.css';

export default function AsideSlider() {
  const history = useHistory();
  const location = useLocation();
  const isLocation = location.pathname;

  const listMenu = [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Service',
      path: '/service',
    },
    {
      name: 'Project',
      path: '/project',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Partnership',
      path: '/partnership',
    },
    {
      name: 'Testimoni',
      path: '/testimoni',
    },
  ];

  return (
    <aside className={styles['aside-scroll']}>
      {isLocation === '/' || isLocation === '/home' ? (
        <div> {null} </div>
      ) : (
        <div>
          {listMenu.map((data, index) => (
            <div key={index}>
              {data.path === isLocation ? <p>{data.name}</p> : <p>&nbsp;</p>}{' '}
              <div
                className={
                  data.path === isLocation
                    ? styles['circle-active']
                    : styles.circle
                }
                onClick={() => history.push(data.path)}
              />
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
