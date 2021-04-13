import { useEffect } from 'react';

const DocumentBackground = (background) => {
  useEffect(() => {
    document.body.style.backgroundImage = background;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  });
};

export default DocumentBackground;
