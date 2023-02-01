import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
  constructor(confirmSelector) {
    super(confirmSelector);
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {      // Слушатель сабмита
      event.preventDefault();
    });
    super.setEventListeners();
  }


}
