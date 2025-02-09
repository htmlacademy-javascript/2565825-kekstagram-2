import { onOpenEditForm, onMessageShow } from './form-validator.js';
import { FileTypes } from './const.js';

const fileInput = document.getElementById('upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');

const effectPreviews = document.querySelectorAll('.effects__preview');

const onFileInputChange = () => {
  const file = fileInput.files[0];
  if (!file) {
    return;
  }

  const fileName = file.name.toLowerCase();

  const matches = FileTypes.test(fileName);
  if (!matches) {
    fileInput.value = '';
    onMessageShow(document.querySelector('#error').content.querySelector('.error'));
    return;
  }

  const fileURL = URL.createObjectURL(file);
  imgPreview.src = fileURL;

  effectPreviews.forEach((preview) => {
    preview.style.backgroundImage = `url(${fileURL})`;
  });

  onOpenEditForm();
};

const photoUploading = () => {
  fileInput.addEventListener('change', onFileInputChange);
};

export { photoUploading };
