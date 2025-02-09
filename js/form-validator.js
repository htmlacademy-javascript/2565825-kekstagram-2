import { PhotoConsts } from './const.js';
import { resetFilters } from './effects-slider.js';
import { resetScale } from './photo-scale.js';
import { sendData } from './api.js';
import { photoUploading } from './photo-uploading.js';

const { MAX_COMMENT_SYBMOLS, MAX_SYMBOLS, MAX_HASHTAGS } = PhotoConsts;

const uploadForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const SUCCESS_TEMPLATE = document.querySelector('#success').content.querySelector('.success');
const ERROR_TEMPLATE = document.querySelector('#error').content.querySelector('.error');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'pristine-error',
  errorClass: 'img-upload__field-wrapper--error',
});

photoUploading();

// Правила валидации хэштегов
const hashtagRules = [
  {
    check: (inputArrayss) => inputArrayss.every((item) => item !== '#'),
    error: 'Хэштег не может состоять только из одной решётки',
  },
  {
    check: (inputArrayss) => inputArrayss.every((item) => !item.slice(1).includes('#')),
    error: 'Хэштеги разделяются пробелами',
  },
  {
    check: (inputArrayss) => inputArrayss.every((item) => item[0] === '#'),
    error: 'Хэштег должен начинаться с символа "#"',
  },
  {
    check: (inputArrays) => inputArrays.every((item, index, array) => array.indexOf(item) === index),
    error: 'Хэштеги не должны повторяться',
  },
  {
    check: (inputValue) => inputValue.every((item) => new RegExp(`^#[a-zа-яё0-9]{1,${MAX_SYMBOLS}}$`, 'i').test(item)),
    error: 'Недопустимые символы, допустимы буквы, цифры и символ \'#\'',
  },
  {
    check: (inputArrays) => inputArrays.every((item) => item.length <= MAX_COMMENT_SYBMOLS),
    error: `Максимальная длина одного хэштега ${MAX_SYMBOLS} символов, включая решётку`,
  },
  {
    check: (inputArrays) => inputArrays.length <= MAX_HASHTAGS,
    error: `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
  },
];

// Функция валидации хэштегов
const validateHashtags = (value) => {
  if (!value.trim()) {
    return true; // Пустое значение валидно
  }
  const inputArrays = value.trim().toLowerCase().split(/\s+/);
  return hashtagRules.every((rule) => rule.check(inputArrays));
};

// Функция получения текста ошибки
const getHashtagsError = (value) => {
  if (!value.trim()) {
    return '';
  }

  const inputArrays = value.trim().toLowerCase().split(/\s+/);
  for (const rule of hashtagRules) {
    if (!rule.check(inputArrays)) {
      return rule.error;
    }
  }

  return '';
};

// Правило для валидации комментария
const validateDescription = (value) => value.length <= MAX_COMMENT_SYBMOLS;
const getDescriptionError = () =>
  `Длина комментария не может превышать ${MAX_COMMENT_SYBMOLS} символов.`;
pristine.addValidator(hashtagsInput, validateHashtags, getHashtagsError);
pristine.addValidator(descriptionInput, validateDescription, getDescriptionError);

const onOpenEditForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseEditForm);
  document.addEventListener('keydown', onEscKeyPress);
};

// Закрытие формы редактирования
function onCloseEditForm() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  resetFilters();
  resetScale();
  closeButton.removeEventListener('click', onCloseEditForm);
  document.removeEventListener('keydown', onEscKeyPress);
}

// Закрытие формы при нажатии Escape
function onEscKeyPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    const message = document.querySelector('.success, .error');

    if (message) {
      message.remove();
      document.removeEventListener('keydown', onEscKeyPress);

      if (!uploadOverlay.classList.contains('hidden')) {
        document.addEventListener('keydown', onEscKeyPress);
      }
      return;
    }

    if (
      !hashtagsInput.matches(':focus') &&
      !descriptionInput.matches(':focus')
    ) {
      onCloseEditForm();
    }
  }
}

[hashtagsInput, descriptionInput].forEach((activeInput) => {
  activeInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
});

const onMessageShow = (template) => {
  const message = template.cloneNode(true);
  document.body.appendChild(message);

  const onMessageRemove = () => {
    message.remove();
    document.removeEventListener('keydown', onEscKeyPress);
    document.removeEventListener('click', onOutsideClick);
  };

  function onOutsideClick(evt) {
    if (evt.target === message) {
      onMessageRemove();
    }
  }

  if (message.querySelector('button')) {
    (message.querySelector('button')).addEventListener('click', onMessageRemove);
  }

  document.addEventListener('keydown', onEscKeyPress);
  document.addEventListener('click', onOutsideClick);
};

// Обработчик отправки формы
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = true;
    const formData = new FormData(uploadForm);
    sendData(formData)
      .then(() => {
        onCloseEditForm();
        onMessageShow(SUCCESS_TEMPLATE);
      })
      .catch(() => {
        onMessageShow(ERROR_TEMPLATE);
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  }
});

uploadForm.addEventListener('reset', () => {
  onCloseEditForm();
});

export { onOpenEditForm, onMessageShow };
