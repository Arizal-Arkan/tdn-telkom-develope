import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.scoped.css';

export default function AsideSlider() {
  const history = useHistory();
  const { pathname } = useLocation();

  const listMenu = [
    {
      name: 'Profile',
      path: '/profile'
    },
    {
      name: 'Service',
      path: '/service'
    },
    {
      name: 'Project',
      path: '/project'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Partnership',
      path: '/partnership'
    },
    {
      name: 'Testimoni',
      path: '/testimoni'
    },
  ];

  return (
    <aside className={styles['aside-scroll']}>
      {pathname !== '/' && (
        <div>
          {listMenu.map((data, index) => (
            <div className={data.path === pathname ? styles.active : ''} key={index}>
              <div onClick={() => history.push(data.path)} />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      )}
      <div className={pathname === '/' ? styles['year-intro'] : styles.year}>
        <p>&copy; 2021</p>
      </div>
    </aside>
  );
}
