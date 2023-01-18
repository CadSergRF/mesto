import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
  constructor({ handleSubmitForm}, popupSelector) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach( input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
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
