import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ handleSubmitForm }, popupSelector) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._btnSubmit = this._form.querySelector('.popup__save-btn');
  }

  _getInputValues() {       //  Получаем значения инпутов
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    this._inputValues.likes = [];
    return this._inputValues;
  }

  setInputValues(data) {    //  Устанавливаем значения
    this._inputList.forEach( input => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {      // Слушатель сабмита
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
