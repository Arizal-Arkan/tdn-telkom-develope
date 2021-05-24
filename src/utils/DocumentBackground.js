import { useEffect } from 'react';

export default (background) => {
  useEffect(() => {
    const app = document.getElementById('app');

    if (CSS.supports('background-image', `url(/assets/${background}.webp)`)) {
      app.style.backgroundImage = `url(/assets/${background}.webp)`;
    } else {
      app.style.backgroundImage = `url(/assets/${background}.png)`;
    }
  }, [background]);
};
