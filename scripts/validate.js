import { configValidation } from './configValidation.js';




function enableValidation(config) {
  const {formSelector, inputSelector, submitButtonSelector, ...errorConfig} = config;

  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    const inputs = form.querySelectorAll(inputSelector);
    const button = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    console.log(inputs);
  })

};


enableValidation(configValidation);
