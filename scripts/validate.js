import { configValidation } from './configValidation.js';

function showErrorMessage(form, input, config, errorMessage) {  //Показываем ошибку
  const errorElem = form.querySelector(`.${input.name}-error`);
  input.classList.add(`${config.inputErrorClass}`);
  errorElem.textContent = errorMessage;
};

function hideErrorMessage(form, input, config) {    // Скрываем ошибку
  const errorElem = form.querySelector(`.${input.name}-error`);
  input.classList.remove(`${config.inputErrorClass}`);
  errorElem.textContent = '';
};

function toogleBtnDisabled(form, inputs, config) {
  const button = form.querySelector(config.submitButtonSelector); // ищем кнопку
  const isValidForm = inputs.every((input) => input.validity.valid); // ВСе инпуты валидны???
  if (isValidForm) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
  }
  else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  }
};

function checkValidityForm(form, inputs, config) { // проверка валидации
  inputs.forEach((input) => {
    input.addEventListener('input', () => { // слушательна каждй инпут
      if (!input.validity.valid) {
        showErrorMessage(form, input, config, input.validationMessage); // показываем error если valid = false
      }
      else {
        hideErrorMessage(form, input, config);  //стираем error если valid = true
      }
      toogleBtnDisabled(form, inputs, config);  // tootgle для кнопки
    });
  });
};

function enableValidation(config) {
  const { formSelector, inputSelector, ...errorConfig } = config;
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(inputSelector)];

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    checkValidityForm(form, inputs, errorConfig); //Валидация
  })
};

export function checkOpenedPopup(idPopup, config) {
  const form = idPopup.querySelector(config.formSelector);
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach((input) => {
    hideErrorMessage(form, input, config);
  });

  toogleBtnDisabled(form, inputs, config);
}

enableValidation(configValidation);
