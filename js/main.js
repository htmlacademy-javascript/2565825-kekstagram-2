import './form-validator.js';
import './effects-slider.js';
import './photo-scale.js';
import { renderImages, showErrorMessage } from './rendering-images.js';
import { getData } from './api.js';
import { picturesSorting } from './photos-sorting.js';

getData()
  .then((photos) => {
    renderImages(photos); // Отрисовываем фото по умолчанию
    picturesSorting(photos); // Запускаем фильтры
  })
  .catch(() => {
    showErrorMessage();
  });
