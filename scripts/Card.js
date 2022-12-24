
export class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = this._templateSelector
      .querySelector('.places__item')
      .cloneNode(true);

    return cardElement;
  }

  _addListeners() {
    this._cardLike.addEventListener('click', this._likeCard);
    this._cardDelete.addEventListener('click', this._deleteCard);
    //this._cardFull.addEventListener('click', handleBigImagePopup(this._image, this._name));
  }

  _likeCard = (event) => {
    event.stopPropagation(); // Запрет всплытия event
    this._cardLike.classList.toggle('place__like_active');
  }

  _deleteCard = (event) => {
    event.stopPropagation();
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.place__image');
    this._cardLike = this._element.querySelector('.place__like');
    this._cardDelete = this._element.querySelector('.place__delete');
    this._cardFull = this._element.querySelector('.place');
    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._element.querySelector('.place__title').textContent = this._cardData.name;
    this._addListeners();

    return this._element;
  }
}
