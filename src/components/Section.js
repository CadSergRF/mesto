export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(newCard) {        //  для загрузки и рендера новых карточек
    this._container.prepend(newCard);
  }

  addItemFromServer(Card) {     //  Для загрузки карточек с сервера
    this._container.append(Card);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  renderPlace(cardsData) {
    this._clear();
    cardsData.forEach(card => {
      this._renderer(card);
    });
  }
}
