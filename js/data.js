import { getRandomInteger, createRandomId, getRandomArrayElement } from './util.js';
import { DESCRIPTIONS, NAMES, COMMENTS, RangesOfIntegers } from './const.js';

//Функция для создания комментария
const createComment = () => ({
  id: getRandomInteger(RangesOfIntegers.MIN_COMMNET_ID, RangesOfIntegers.MAX_COMMNET_ID),
  avatar: `img/avatar-${getRandomInteger(RangesOfIntegers.MIN_ID, RangesOfIntegers.MAX_AVATARS)}.svg`,
  message: Array.from({ length: 1 }, () => getRandomArrayElement(COMMENTS)).join(' '),
  name: getRandomArrayElement(NAMES)
});
//Функция для создания фото
function createPhoto(counter) {
  const getImageId = createRandomId(RangesOfIntegers.MIN_ID, RangesOfIntegers.MAX_ID);
  const getUrlId = createRandomId(RangesOfIntegers.MIN_ID, RangesOfIntegers.MAX_ID);

  const photo = () => ({
    id: getImageId(),
    url: `photos/${getUrlId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(RangesOfIntegers.MIN_LIKES, RangesOfIntegers.MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(RangesOfIntegers.MIN_COMENTS, RangesOfIntegers.MAX_COMENTS) }, createComment)
  });
  const arrayOfPhotos = Array.from({ length: counter }, photo);
  return arrayOfPhotos;
}

export { createPhoto };
