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
      }
      else {
        hideErrorMessage(form, input, config);
      }
      const button = form.querySelector(config.submitButtonSelector);
      console.log(button);
      const isValidForm = inputs.every((input) => input.validity.valid);
      if (isValidForm) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = '';
      }
      else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
      }
    });
  });
};

function enableValidation(config) {
  const { formSelector, inputSelector, ...errorConfig } = config;
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(inputSelector)];

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    checkValidityForm(form, inputs, errorConfig); //Валидация
  })
};


enableValidation(configValidation);
