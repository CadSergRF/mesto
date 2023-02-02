import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImageBig = this._popupElement.querySelector('.popup__image-big');  // Увеличенная картинка
    this._popupImageTitle = this._popupElement.querySelector('.popup__image-title'); // Подпись к popupImageBig
  }

  open(placeData) {
    this._popupImageBig.src = placeData.link;
    this._popupImageBig.alt = placeData.name;
    this._popupImageTitle.textContent = placeData.name;
    super.open();
  }
}
