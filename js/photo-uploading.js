import { openEditForm, showMessage } from './form-validator.js';

const fileInput = document.getElementById('upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');

const effectPreviews = document.querySelectorAll('.effects__preview');
const FILE_TYPES = /\.(jpg|jpeg|png)$/i;

const onFileInputChange = () => {
  const file = fileInput.files[0];
  if (!file) {
    return;
  }

  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.test(fileName);
  if (!matches) {
    fileInput.value = '';
    showMessage(document.querySelector('#error').content.querySelector('.error'));
    return;
  }

  const fileURL = URL.createObjectURL(file);
  imgPreview.src = fileURL;

  effectPreviews.forEach((preview) => {
    preview.style.backgroundImage = `url(${fileURL})`;
  });

  openEditForm();
};

const photoUploading = () => {
  fileInput.addEventListener('change', onFileInputChange);
};

export { photoUploading };
