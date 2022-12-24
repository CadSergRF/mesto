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
}
