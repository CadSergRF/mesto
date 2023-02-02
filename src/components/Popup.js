export class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keyup', this._handleEscClose);
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
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
    const popupCloseBtn = this._popupElement.querySelector('.popup__close-btn');   //закрытие на крест
    popupCloseBtn.addEventListener('click', () => {
      this.close();
    });
    this._popupElement.addEventListener('click', (event) => {  // Закрытие на оверлей
      if (event.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
