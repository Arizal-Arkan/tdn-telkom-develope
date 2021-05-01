import React from 'react';
import { useHistory } from 'react-router-dom';
import DocumentBackground from './../../utils/DocumentBackground';
import styles from './styles.scoped.css';
import { IMAGES } from '../../configs';

export default function Service() {
  DocumentBackground(`url(${IMAGES.BG_SERVICE})`);
  const history = useHistory();

  const listCard = [
    {
      role: 'Software Architect',
      img: IMAGES.SOFTW,
      to: 'software-architec',
    },
    {
      role: 'Mobile Developer',
      img: IMAGES.MOBILE,
      to: 'mobile-developer',
    },
    {
      role: 'Frontend Developer',
      img: IMAGES.FE,
      to: 'frontend-developer',
    },
    {
      role: 'Backend Developer',
      img: IMAGES.BEN,
      to: 'backend-developer',
    },
    {
      role: 'Documentation Engineer',
      img: IMAGES.DOC,
      to: 'document-enginer',
    },
    {
      role: 'Scrum Master',
      img: IMAGES.SM,
      to: 'scrum-master',
    },
    {
      role: 'Quality Assurance',
      img: IMAGES.QA,
      to: 'quality-assurance',
    },
    {
      role: 'DevSecOps Engineer',
      img: IMAGES.OPS,
      to: 'DevSecOps-engineer',
    },
  ];

  return (
    <div className={styles['service-content']}>
      <h2>What we do</h2>
      <div>
        {listCard.map((data, index) => (
          <div
            key={index}
            onClick={() =>
              history.push({
                pathname: `/service/${data.to}`,
                state: { detail: data.to },
              })
            }
          >
            <img alt="" src={data.img} /> <p>{data.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
