import { openBigPicture } from './fullScreenViewer.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const clearImages = () => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const renderImages = (photos) => {
  clearImages();
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__img').alt = description;

    pictureElement.addEventListener('click', () => {
      openBigPicture({ url, description, likes, comments });
    });

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};

export { renderImages, showErrorMessage };
