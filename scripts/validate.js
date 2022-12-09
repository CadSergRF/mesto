import { configValidation } from './configValidation.js';

function showErrorMessage(form, input, config, errorMessage) {
  const errorElem = form.querySelector(`.${input.name}-error`);
  input.classList.add(`${config.inputErrorClass}`);
  errorElem.textContent = errorMessage;
};

function hideErrorMessage(form, input, config) {
  const errorElem = form.querySelector(`.${input.name}-error`);
  input.classList.remove(`${config.inputErrorClass}`);
  errorElem.textContent = '';
}

function checkValidityForm(form, inputs, config) { // проверка валидации
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (!input.validity.valid) {
        showErrorMessage(form, input, config, input.validationMessage);
      } else {
        hideErrorMessage(form, input, config);
      }
    });
  });
};

function enableValidation(config) {
  const { formSelector, inputSelector, submitButtonSelector, ...errorConfig } = config;
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    checkValidityForm(form, inputs, errorConfig); //Валидация
  })
};


enableValidation(configValidation);
