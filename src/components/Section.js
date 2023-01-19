export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(newCard) {
    this._container.prepend(newCard);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  renderPlace() {
    this._clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
