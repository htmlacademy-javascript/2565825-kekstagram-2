import { createPhoto } from './data.js';
import { RangesOfIntegers } from './const.js';

const photoGallery = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photos = createPhoto(RangesOfIntegers.MAX_ID);

const photoGenerated = document.createDocumentFragment();

photos.forEach(({ id, url, description, likes, comments }) => {
  const element = photosTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__img').alt = description;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.dataset.id = id;
  photoGenerated.appendChild(element);
});

const photosRendering = () => photoGallery.appendChild(photoGenerated);

export { photosRendering };
