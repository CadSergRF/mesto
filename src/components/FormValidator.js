export class FormValidator {
  constructor(configValidation, formName) {
    this._config = configValidation;
    this._formName = formName;
    this._inputs = [...this._formName.querySelectorAll(this._config.inputSelector)];
    this._submitButton = this._formName.querySelector(this._config.submitButtonSelector); // ищем кнопку
  }

  enableValidation() {    //  публМетод валидации
    this._formName.addEventListener('submit', (evt) => {
      evt.preventDefault();   //  убираем стандарт evt
    })
    this._checkValidityForm();    //  Валидация
  }

  checkOpenedPopup() {    //  Проверка при открытии формы
    this._inputs.forEach((input) => {
      this._hideErrorMessage(input);
    })
    this._toogleBtnDisabled();
  }

  _checkValidityForm = () => {    //  метод валидации
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {   //  слушатель на каждый инпут в форме
        if (!input.validity.valid) {
          this._showErrorMessage(input, input.validationMessage);
        }
        else {
          this._hideErrorMessage(input);
        }
        this._toogleBtnDisabled();    //  toogle для кнопки
      })
    })
  }

  _showErrorMessage(input, errorMessage) {    //  Показать ошибку
    const errorElem = this._formName.querySelector(`.${input.name}-error`);
    input.classList.add(`${this._config.inputErrorClass}`);
    errorElem.textContent = errorMessage;
  }

  _hideErrorMessage(input) {    //  Скрыть ошибку
    const errorElem = this._formName.querySelector(`.${input.name}-error`);
    input.classList.remove(`${this._config.inputErrorClass}`);
    errorElem.textContent = '';
  }

  _toogleBtnDisabled() {    //  Валидность на кнопке
    const isValidForm = this._inputs.every((input) => input.validity.valid); // ВСе инпуты валидны???
    if (isValidForm) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = '';
    }
    else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = 'disabled';
    }
  }

} // конец класса
