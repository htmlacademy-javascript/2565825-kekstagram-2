import './rendering-images.js';
import './form-validator.js';
import './effects-slider.js';
import './photo-scale.js';
import { renderImages, showErrorMessage } from './rendering-images.js';
import { getData } from './api.js';

getData()
  .then((photos) => renderImages(photos))
  .catch(() => {
    showErrorMessage();
  });
