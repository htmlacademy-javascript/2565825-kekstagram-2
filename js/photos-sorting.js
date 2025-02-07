import { renderImages } from './rendering-images.js';
import { debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

const MAX_PHOTO_COUNT = 10;
const DEBOUNCE_DELAY = 500;
let photos = [];

// Функция рендеринга изображений с учетом фильтра
const applyFilter = (filter) => {
  let filteredPhotos = photos;
  switch (filter) {
    case 'random':
      filteredPhotos = photos
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_PHOTO_COUNT);
      break;
    case 'discussed':
      filteredPhotos = photos.sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      break;
  }
  renderImages(filteredPhotos);
};

// Устранение дребезга
const debouncedFilter = debounce((filter) => {
  applyFilter(filter);
}, DEBOUNCE_DELAY);

// Добавляем обработчики событий на фильтры
const picturesSorting = (loadedPhotos) => {
  photos = loadedPhotos;
  imgFilters.classList.remove('img-filters--inactive'); // Показываем фильтры
  imgFilters.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      filterButtons.forEach((btn) => btn.classList.remove('img-filters__button--active'));
      evt.target.classList.add('img-filters__button--active');
      const filterId = evt.target.id;
      if (filterId === 'filter-default') {
        debouncedFilter('default');
      } else if (filterId === 'filter-random') {
        debouncedFilter('random');
      } else if (filterId === 'filter-discussed') {
        debouncedFilter('discussed');
      }
    }
  });
};

export { picturesSorting };
