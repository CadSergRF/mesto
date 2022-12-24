class Card {
  constructor(cardData, templateSelector) {
    this._image = cardData.link;   //  ссылка на изображение
    this._name = cardData.name;    //  подпись к изображению
    this._description = cardData.name;   //  выделим сразу описание к посту (alt для изображения)
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.places__item')
      .cloneNode(true);

    return cardElement;
  }

  _addListeners() {

  }

  createCard() {
    this._element = this._getTemplate();
    const cardImage = this._cardElement.querySelector('.place_image');
    const cardLike = this._element.querySelector('.place__like');
    const cardDelete = this._element.querySelector('.place__delete');
    const cardFull = this._element.querySelector('.place');

    cardImage.src = this._image;
    cardImage.alt = this._description;
    cardElement.querySelector('.place__title').textContent = this._name;
    this._addListeners(cardLike, cardDelete, cardFull);

    return this._element;
  }
}
