/* Переменные */
import { initialPlaces } from '../utils/places.js';    //  начальные карточки
import { configValidation } from '../utils/configs.js';   //  конфиг валидации
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import {
  formEditProfile, formAddPlace, btnClosePopup, rootElem, popupList, popupEditProfile, popupAddPlaceElem, popupEnhanceImage, placeTemplateElement,
  popupCloseBtnList, userProfileEditBtn, userName, userJob, userProfileAddPlaceBtn,
  placesListElement, popupImageBig,
  popupImageTitle
} from '../utils/pageElements.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const profileIsValid = new FormValidator(configValidation, formEditProfile); // экз. Валидатора для профиля
const newCardIsValid = new FormValidator(configValidation, formAddPlace); // экз. Валидатора для добавления карточки

const popupAddPlace = new PopupWithForm({
  handleSubmitForm: (placeData) => {
    placesListElement.prepend(renderPlace(placeData));
    popupAddPlace.close();
  }
},
  popupAddPlaceElem);

popupAddPlace.setEventListeners();

userProfileAddPlaceBtn.addEventListener('click', () => {
  newCardIsValid.checkOpenedPopup();
  popupAddPlace.open();
});

const userInfo = new UserInfo({
  userNameSelector: '.user-profile__name',
  userJobSelector: '.user-profile__job'
});
const popupEditUserInfo = new PopupWithForm({
  handleSubmitForm: (userData) => {
    userInfo.setUserInfo(userData);
    popupEditUserInfo.close();
  }
},
  popupEditProfile);

popupEditUserInfo.setEventListeners();

userProfileEditBtn.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  formEditProfile.elements.editProfileName.value = userData.editProfileName;
  formEditProfile.elements.editProFileJob.value = userData.editProFileJob;
  profileIsValid.checkOpenedPopup();
  popupEditUserInfo.open();
})

const popupWithImage = new PopupWithImage(popupEnhanceImage);
popupWithImage.setEventListeners();

function renderPlace(item) {
  const card = new Card(item, placeTemplateElement,
    {
      handleCardClick: (item) => {
        popupWithImage.open(item);
      }
    });
  const newCard = card.createCard();
  return newCard;
}
const places = new Section({
  items: initialPlaces,
  renderer: (item) => {
    places.addItem(renderPlace(item));
  }
}
  , placesListElement);

places.renderPlace();

/* Валидация форм */
profileIsValid.enableValidation();
newCardIsValid.enableValidation();
/* Обработчики событий */
// userProfileEditBtn.addEventListener('click', handleOpenProfilePopup);
// userProfileAddPlaceBtn.addEventListener('click', handleOpenAddPlacePopup);
// popupCloseBtnList.forEach(elem => elem.addEventListener('click', closePopupButton));
// popupList.forEach(elem => elem.addEventListener('click', closePopupByOverlay));
// formEditProfile.addEventListener('submit', handleSubmitProfile);
// formAddPlace.addEventListener('submit', handleAddPlace);
