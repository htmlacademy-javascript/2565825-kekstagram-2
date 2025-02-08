import { getRandomInteger, createRandomId, getRandomArrayElement } from './util.js';
import { DESCRIPTIONS, NAMES, COMMENTS, PhotoConsts } from './const.js';
const { MIN_COMMNET_ID, MAX_COMMNET_ID, MIN_ID, MAX_ID, MAX_AVATARS, MIN_LIKES, MAX_LIKES, MIN_COMENTS, MAX_COMENTS } = PhotoConsts;

//Функция для создания комментария
const createComment = () => ({
  id: getRandomInteger(MIN_COMMNET_ID, MAX_COMMNET_ID),
  avatar: `img/avatar-${getRandomInteger(MIN_ID, MAX_AVATARS)}.svg`,
  message: Array.from({ length: 1 }, () => getRandomArrayElement(COMMENTS)).join(' '),
  name: getRandomArrayElement(NAMES)
});

//Функция для создания фото
function createPhoto(counter) {
  const getImageId = createRandomId(MIN_ID, MAX_ID);
  const getUrlId = createRandomId(MIN_ID, MAX_ID);

  const photo = () => ({
    id: getImageId(),
    url: `photos/${getUrlId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_COMENTS, MAX_COMENTS) }, createComment)
  });
  const arrayOfPhotos = Array.from({ length: counter }, photo);
  return arrayOfPhotos;
}

export { createPhoto };
