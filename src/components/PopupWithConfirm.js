import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popupElement.querySelector('.popup__form');
    this._btnSubmit = this._form.querySelector('.popup__save-btn'); // Нужна для вызова changeBtnSubmitText(text) из Popup
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
