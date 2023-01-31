export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(newCard) {
    this._container.prepend(newCard);
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
