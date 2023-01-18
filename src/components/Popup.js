import { btnClosePopup,
rootElem } from '../utils/pageElements.js'

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    rootElem.addEventListener('keyup', this._handleEscClose);
    this._popupSelector.classList.add('popup_opened');
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    rootElem.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(event) {             // Закрытие по Esc
    if (event.key === btnClosePopup) {
      this.close();
    }
  };

  setEventListeners() {
    const popupCloseBtn = this._popupSelector.querySelector('.popup__close-btn');
    popupCloseBtn.addEventListener('click', () => {
      this.close();
    });
    this._popupSelector.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
