import { createPhoto } from './data.js';
import { RangesOfIntegers } from './const.js';
import { openBigPicture } from './fullScreenViewer.js';

const photoGallery = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photos = createPhoto(RangesOfIntegers.MAX_ID);

const photoGenerated = document.createDocumentFragment();

photos.forEach((photo) => {
  const { id, url, description, likes, comments } = photo;

  const element = photosTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__img').alt = description;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.dataset.id = id;
  photoGenerated.appendChild(element);

  element.addEventListener('click', () => {
    openBigPicture(photo);
  });
});
photoGallery.appendChild(photoGenerated);

export { photoGallery, photos };
