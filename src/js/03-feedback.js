import throttle from 'lodash.throttle';
import { save, load } from './utilities.js';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');
const inputValues = {};
const STORAGE_KEY = 'feedback-form-state';

if (load(STORAGE_KEY)) {
  inputEmail.value = load(STORAGE_KEY).email;
  inputMessage.value = load(STORAGE_KEY).message;
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  const formData = new FormData(form);
  formData.forEach((value, name) => {
    inputValues[name] = value;

    save(STORAGE_KEY, inputValues);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (load(STORAGE_KEY)) console.log(load(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
