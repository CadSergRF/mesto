import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  handleSubmit(newSubmit) {
    this._handleSubmitForm = newSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {      // Слушатель сабмита
      event.preventDefault();
      this._handleSubmitForm();
    });
  }

}
