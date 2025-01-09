const DESCRIPTIONS = [
  'Закат над морем',
  'Улыбающийся ребёнок',
  'Лес осенью',
  'Городские огни',
  'Цветущий сад',
  'Снежные вершины',
  'Пляжный отдых',
  'Ночной город',
  'Весенние цветы',
  'Пустынный пейзаж'
];

const NAMES = [
  'Анна',
  'Дмитрий',
  'Екатерина',
  'Иван',
  'Мария',
  'Николай',
  'Ольга',
  'Павел',
  'Светлана',
  'Татьяна'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomId(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(1, 500),
  avatar: `img/avatar-${getRandomInteger(1, 25)}.svg`,
  message: Array.from({ length: 1 }, () => getRandomArrayElement(COMMENTS)).join(' '),
  name: getRandomArrayElement(NAMES)
});

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

console.log(createPhoto(PHOTOS_COUNT));

