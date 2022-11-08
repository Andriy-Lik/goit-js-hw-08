import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const locStorKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};
checkTextArea()

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(locStorKey, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(locStorKey)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(locStorKey);
}

function checkTextArea() {
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  const inputCurrent = JSON.parse(localStorage.getItem(locStorKey));

  if (inputCurrent) {
    email.value = inputCurrent.email || '';
    message.value = inputCurrent.message || '';
  }
}


