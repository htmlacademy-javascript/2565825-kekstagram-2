import { getRandomInteger, createRandomId, getRandomArrayElement } from './util.js';
import { DESCRIPTIONS, NAMES, COMMENTS } from './const.js';

//Функция для создания комментария
const createComment = () => ({
  id: getRandomInteger(1, 500),
  avatar: `img/avatar-${getRandomInteger(1, 25)}.svg`,
  message: Array.from({ length: 1 }, () => getRandomArrayElement(COMMENTS)).join(' '),
  name: getRandomArrayElement(NAMES)
});

//Функция для создания фото
function createPhoto(counter) {
  const getImageId = createRandomId(1, 25);
  const getUrlId = createRandomId(1, 25);

  const photo = () => ({
    id: getImageId(),
    url: `photos/${getUrlId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
  });

  const arrayOfPhotos = Array.from({ length: counter }, photo);
  return arrayOfPhotos;
}

export { createPhoto };
