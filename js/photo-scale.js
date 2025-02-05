import { PHOTO_CONSTS } from './const.js';

const { SCALE_STEP_VALUE, SCALE_MIN_VALUE, SCALE_MAX_VALUE, DEFAULT_SCALE_VALUE } = PHOTO_CONSTS;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

let currentScale = DEFAULT_SCALE_VALUE;
scaleControlValue.value = `${currentScale}%`;

// Обновление масштаба
const changeScale = () => {
  scaleControlValue.value = `${currentScale}%`;
  photoPreview.style.transform = `scale(${currentScale / 100})`;
};

// Уменьшение масштаба
scaleControlSmaller.addEventListener('click', () => {
  if (currentScale > SCALE_MIN_VALUE) {
    currentScale -= SCALE_STEP_VALUE;
    changeScale();
  }
});

// Увеличение масштаба
scaleControlBigger.addEventListener('click', () => {
  if (currentScale < SCALE_MAX_VALUE) {
    currentScale += SCALE_STEP_VALUE;
    changeScale();
  }
});
