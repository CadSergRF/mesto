export class FormValidator {

  constructor(configValidation, formName) {
    this._config = configValidation;
    this._formName = formName;
  }

  enableValidation() {
    this._formName.addEventListener('submit', (evt) => {
      evt.preventDefault();   //  убираем стандарт evt
    })

    this._checkValidityForm;    //  Валидация
  }

  checkOpenedPopup() {    //  Проверка при открытии формы
    this._inputs.forEach((input) => {
      this._hideErrorMessage(input);
    })
    this._toogleBtnDisabled;
  }

  _checkValidityForm = () => {    //  метод валидации
    this._inputs = [...this._formName.querySelectorAll(this._config.inputSelector)];

    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {   //  слушатель на каждый инпут в форме
        if (!input.validity.valid) {
          this._showErrorMessage(input, input.validationMessage);
        }
        else {
          this._hideErrorMessage(input);
        }
        this._toogleBtnDisabled;    //  toogle для кнопки
      })
    })
  }

}
