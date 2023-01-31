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
import { Api } from '../components/Api';
// import { Api } from '../components/Api.js';

const profileIsValid = new FormValidator(configValidation, formEditProfile); // экз. Валидатора для профиля
profileIsValid.enableValidation();
const newCardIsValid = new FormValidator(configValidation, formAddPlace); // экз. Валидатора для добавления карточки
newCardIsValid.enableValidation();

const api = new Api({   // экземпляр класса Api - запросы к серверу
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '03dc3376-ddee-4eae-b74f-6570ee2c94e8',
    'Content-Type': 'application/json'
  }
});

//  ---------- ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ ----------  //

const userInfo = new UserInfo({   // экз. Данные профиля
  userNameSelector: '.user-profile__name',
  userJobSelector: '.user-profile__job'
});

api.getUserInfo()   //  Пролучаем инфо о пользователе
  .then((userData) => {
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditUserInfo = new PopupWithForm({   //экз. формы редактирования профиля
  handleSubmitForm: (userData) => {
    api.editUserInfo(userData)
    .then(() => {
      userInfo.setUserInfo({
        name: userData.editProfileName,   // приводим в соответствие ключи объекта т.к на сервере name & about
        about: userData.editProFileJob    // а я изначально задал editProfileName & editProFileJob Исправлять везде очень гем
      });
      popupEditUserInfo.changeBtnSubmitText('Сохранение...');
      popupEditUserInfo.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupEditUserInfo.changeBtnSubmitText('Сохранить'));
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


//  ---------- PLACES (карточки) ----------  //

api.getInitialCards()   //  Получаем карточки с сервера
  .then((cardsData) => {
    console.log(cardsData);
    places.renderPlace(cardsData);    // рендерим - вставляем
  })
  .catch((err) => {
    console.log(err);
  });

const places = new Section({    //
  renderer: (item) => {
    places.addItem(renderPlace(item));
  }
}
  , placesListElement);

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

const popupAddPlace = new PopupWithForm({   //  экз. формы новой карточки
  handleSubmitForm: (cardData) => {
    api.addNewCard(cardData)
    .then(() => {
      console.log(cardData);
      places.addItem(renderPlace(cardData));   // добавление новой карточки через экземпляр Section
      popupAddPlace.close();
    })
  }
},
  popupAddPlaceElem);

popupAddPlace.setEventListeners();

userProfileAddPlaceBtn.addEventListener('click', () => {    // Кнопка открытия формы новой карточки
  newCardIsValid.checkOpenedPopup();
  popupAddPlace.open();
});

const popupWithImage = new PopupWithImage(popupEnhanceImage);   //  экз. формы большого img
popupWithImage.setEventListeners();
