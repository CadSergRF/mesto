export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keyup', this._handleEscClose);
    this._popupSelector.classList.add('popup_opened');
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(event) {             // Закрытие по Esc
    if (event.key === 'Escape') {
      this.close();
    }
  };

  changeBtnSubmitText(text) {
    this._btnSubmit.textContent = text;
  }

  setEventListeners() {
    const popupCloseBtn = this._popupSelector.querySelector('.popup__close-btn');   //закрытие на крест
    popupCloseBtn.addEventListener('click', () => {
      this.close();
    });
    this._popupSelector.addEventListener('click', (event) => {  // Закрытие на оверлей
      if (event.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
