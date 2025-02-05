import { EFFECTS, PHOTO_CONSTS } from './const.js';

const { DEFAULT_SLIDER_VALUE, MIN_SLIDER_VALUE, MAX_SLIDER_VALUE, SLIDER_STEP } = PHOTO_CONSTS;

const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectList = document.querySelector('.effects__list');
const container = document.querySelector('.img-upload__effect-level');

let currentFilter = 'default';

noUiSlider.create(sliderElement, {
  range: { min: MIN_SLIDER_VALUE, max: MAX_SLIDER_VALUE, },
  start: DEFAULT_SLIDER_VALUE,
  step: SLIDER_STEP,
  connect: 'lower'
});

const changeFilter = (filter) => {
  switch (filter) {
    case 'marvin':
      return `invert(${effectValue.value}%)`;
    case 'phobos':
      return `blur(${effectValue.value}px)`;
    default:
      return `${EFFECTS[filter].filter}(${effectValue.value})`;
  }
};

sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
  picturePreview.style.filter = changeFilter(currentFilter);
  if (currentFilter === 'default') {
    container.classList.add('visually-hidden');
  }
});

effectList.addEventListener('change', (evt) => {
  const clickedElement = evt.target;
  currentFilter = clickedElement.value;
  if (currentFilter === 'none') {
    picturePreview.style.filter = 'none';
    container.classList.add('visually-hidden');
  } else {
    container.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions(EFFECTS[clickedElement.value].effectsSlider);
  }
});

const resetFilters = () => {
  container.classList.add('visually-hidden');
  sliderElement.noUiSlider.set(100);
  picturePreview.style.filter = 'none';
};

export { resetFilters };
