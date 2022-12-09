import { configValidation } from './configValidation.js';




function enableValidation(config) {
  const { formSelector, inputSelector, submitButtonSelector, ...errorConfig } = config;

  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    const inputs = form.querySelectorAll(inputSelector);
    const button = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    inputs.forEach ((input) => {
      // Функция проверки валидации
      if (!input.validity.valid) {
        const errorElem = form.querySelector(`.${input.name}-error`);
        input.classList.add(`${errorConfig.inputErrorClass}`);
        errorElem.textContent = 'Ошибка';

      } else {
        const errorElem = form.querySelector(`.${input.name}-error`);
        input.classList.remove(`${errorConfig.inputErrorClass}`);
        errorElem.textContent = '';

      }
    })
  })

};


enableValidation(configValidation);
