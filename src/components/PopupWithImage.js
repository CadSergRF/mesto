import { Popup } from "./Popup.js";
import { popupImageBig, popupImageTitle } from '../utils/pageElements.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(placeData) {
    popupImageBig.src = placeData.link;
    popupImageBig.alt = placeData.name;
    popupImageTitle.textContent = placeData.name;
    super.open();
  }
}
