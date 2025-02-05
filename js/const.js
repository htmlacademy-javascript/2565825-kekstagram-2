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

const PHOTO_CONSTS = {
  MIN_ID: 1,
  MAX_ID: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MIN_COMENTS: 0,
  MAX_COMENTS: 30,
  MAX_AVATARS: 6,
  MIN_COMMNET_ID: 1,
  MAX_COMMNET_ID: 500,
  COMMENTS_PER_PAGE: 5,
  MAX_COMMENT_SYBMOLS: 140,
  MAX_SYMBOLS: 20,
  MAX_HASHTAGS: 5,
  MIN_SLIDER_VALUE: 0,
  MAX_SLIDER_VALUE: 1,
  DEFAULT_SLIDER_VALUE: 1,
  SLIDER_STEP: 0.1,
  SCALE_STEP_VALUE: 25,
  SCALE_MIN_VALUE: 25,
  SCALE_MAX_VALUE: 100,
  DEFAULT_SCALE_VALUE: 100
};

const EFFECTS = {
  default: {
    filter: null,
    effectsSlider: null,
  },
  chrome: {
    filter: 'grayscale',
    effectsSlider: {
      range: { min: 0, max: 1 },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    filter: 'sepia',
    effectsSlider: {
      range: { min: 0, max: 1 },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    filter: 'invert',
    effectsSlider: {
      range: { min: 0, max: 100 },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    filter: 'blur',
    effectsSlider: {
      range: { min: 0, max: 3 },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    filter: 'brightness',
    effectsSlider: {
      range: { min: 1, max: 3 },
      start: 3,
      step: 0.1,
    }
  }
};

export { DESCRIPTIONS, NAMES, COMMENTS, PHOTO_CONSTS, EFFECTS };
