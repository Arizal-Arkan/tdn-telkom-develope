import React from 'react';
import PropTypes from 'prop-types';

export default function Webp(props) {
  const { alt, className, name, style, classImg } = props;

  return (
    <picture className={className} style={style}>
      <source srcSet={`/assets/${name}.webp`} type="image/webp" />
      <source srcSet={`/assets/${name}.png`} type="image/png" />
      <img alt={alt} className={classImg} src={`/assets/${name}.png`} />
    </picture>
  );
}

Webp.defaultProps = {
  alt: '',
  classImg: '',
  className: '',
  name: '',
  style: {},
};

Webp.propTypes = {
  alt: PropTypes.string,
  classImg: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};
