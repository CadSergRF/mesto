import './index.css'; //  импорт объединенных стилей
import { initialPlaces } from '../utils/places.js';    //  начальные карточки
import { configValidation } from '../utils/configs.js';   //  конфиг валидации
import {
  formEditProfile, formAddPlace, popupEditProfile, popupAddPlaceElem, popupEnhanceImage,
  placeTemplateElement, userProfileEditBtn, userProfileAddPlaceBtn, placesListElement
} from '../utils/pageElements.js';  // forms, Id , selectors
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';

const profileIsValid = new FormValidator(configValidation, formEditProfile); // экз. Валидатора для профиля
profileIsValid.enableValidation();
const newCardIsValid = new FormValidator(configValidation, formAddPlace); // экз. Валидатора для добавления карточки
newCardIsValid.enableValidation();

const popupAddPlace = new PopupWithForm({   //  экз. формы новой карточки
  handleSubmitForm: (placeData) => {
    places.addItem(renderPlace(placeData));   // добавление новой карточки через экземпляр Section
    popupAddPlace.close();
  }
},
  popupAddPlaceElem);

popupAddPlace.setEventListeners();

userProfileAddPlaceBtn.addEventListener('click', () => {    // Кнопка открытия формы новой карточки
  newCardIsValid.checkOpenedPopup();
  popupAddPlace.open();
});

const userInfo = new UserInfo({   // экз. Данные профиля
  userNameSelector: '.user-profile__name',
  userJobSelector: '.user-profile__job'
});

const popupEditUserInfo = new PopupWithForm({   //экз. формы редактирования профиля
  handleSubmitForm: (userData) => {
    userInfo.setUserInfo(userData);
    popupEditUserInfo.close();
  }
},
  popupEditProfile);

popupEditUserInfo.setEventListeners();

userProfileEditBtn.addEventListener('click', () => {    // Кнопка открытия формы редактирования профиля
  const userData = userInfo.getUserInfo();    // получаем данные профиля
  popupEditUserInfo.setInputValues(userData);   //  вставляем данные в форму
  profileIsValid.checkOpenedPopup();
  popupEditUserInfo.open();
})

const popupWithImage = new PopupWithImage(popupEnhanceImage);   //  экз. формы большого img
popupWithImage.setEventListeners();

function renderPlace(item) {    // рендер карточки
  const card = new Card(item, placeTemplateElement,
    {
      handleCardClick: (item) => {
        popupWithImage.open(item);
      }
    });
  const newCard = card.createCard();
  return newCard;
}

const places = new Section({    //    карточки из базы
  items: initialPlaces,
  renderer: (item) => {
    places.addItem(renderPlace(item));
  }
}
  , placesListElement);

places.renderPlace();
