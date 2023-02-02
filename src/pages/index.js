import './index.css'; //  импорт объединенных стилей
import { configValidation } from '../utils/configs.js';   //  конфиг валидации
import {
  formEditProfile, formAddPlace, formEditAvatar, popupEditProfile, popupEditAvatar, popupAddPlaceElem, popupEnhanceImage,
  placeTemplateElement, userProfileEditBtn, userAvatarEditBtn, userProfileAddPlaceBtn, placesListElement, popupConfirmChanges
} from '../utils/pageElements.js';  // forms, Id , selectors
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const profileIsValid = new FormValidator(configValidation, formEditProfile); // экз. Валидатора для профиля
profileIsValid.enableValidation();
const newCardIsValid = new FormValidator(configValidation, formAddPlace); // экз. Валидатора для добавления карточки
newCardIsValid.enableValidation();
const newAvatarLinkIsValid = new FormValidator(configValidation, formEditAvatar); // экз. Валидатора для ссылки на новый аватар
newAvatarLinkIsValid.enableValidation();

const api = new Api({   // экземпляр класса Api - запросы к серверу
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '03dc3376-ddee-4eae-b74f-6570ee2c94e8',
    'Content-Type': 'application/json'
  }
});

//  ---------- ЗАПРОС НАЧАЛЬНЫХ ДАННЫХ С СЕРВЕРА ----------  //

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    places.renderPlace(cardsData);    // рендерим - вставляем
  })
  .catch((err) => {
    console.log(err);
  });

//  ---------- ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ ----------  //

const userInfo = new UserInfo({   // экз. Данные профиля
  userNameSelector: '.user-profile__name',
  userJobSelector: '.user-profile__job',
  userAvatarSelector: '.user-profile__photo'
});

const popupEditUserInfo = new PopupWithForm({   //экз. формы редактирования профиля
  handleSubmitForm: (userData) => {
    popupEditUserInfo.changeBtnSubmitText('Сохранение...');
    api.editUserInfo(userData)
      .then((res) => {
        userInfo.setUserInfo(res);
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

const popupEditUserAvatar = new PopupWithForm({   //экз. формы изменения аватара
  handleSubmitForm: (userData) => {
    popupEditUserAvatar.changeBtnSubmitText('Сохранение...');
    api.editUserAvatar(userData.link)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupEditUserAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEditUserInfo.changeBtnSubmitText('Сохранить'));
  }
},
  popupEditAvatar);

popupEditUserAvatar.setEventListeners();

userProfileEditBtn.addEventListener('click', () => {    // Кнопка открытия формы редактирования профиля
  popupEditUserInfo.setInputValues(userInfo.getUserInfo());   //  вставляем данные в форму
  profileIsValid.checkOpenedPopup();
  popupEditUserInfo.open();
})

userAvatarEditBtn.addEventListener('click', () => {   //  Аватар слушатель на редактирование
  newAvatarLinkIsValid.checkOpenedPopup();
  popupEditUserAvatar.open();
})


//  ---------- PLACES (карточки) ----------  //

const places = new Section({    //  секция карточек
  renderer: (item) => {
    places.addItem(renderPlace(item));
  }
}
  , placesListElement);

const popupConfirm = new PopupWithConfirm(popupConfirmChanges);   //  попап подтверждения
popupConfirm.setEventListeners();

function renderPlace(item) {    // рендер карточки
  const card = new Card(item, placeTemplateElement, userInfo.getUserID(),
    {
      handleCardClick: (item) => {
        popupWithImage.open(item);
      },
      handleCardDelete: (cardData) => {
        popupConfirm.open();
        popupConfirm.handleSubmit(() => {
          popupConfirm.changeBtnSubmitText('Удаление...')
          api.deleteCard(cardData._id)
            .then(() => {
              card.deleteCard();
              popupConfirm.close();
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => popupConfirm.changeBtnSubmitText('Да'));
        })
      },
      handleCardLike: (cardData) => {
        if (card.isLikedCard()) {
          api.deleteLike(cardData._id)
            .then((res) => {
              card.changeLikesCard(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        else {
          api.addLike(cardData._id)
            .then((res) => card.changeLikesCard(res.likes))
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  const newCard = card.createCard();
  return newCard;
}

const popupAddPlace = new PopupWithForm({   //  экз. формы новой карточки
  handleSubmitForm: (cardData) => {
    popupAddPlace.changeBtnSubmitText('Сохранение...');
    api.addNewCard(cardData)
      .then((res) => {
        places.addItem(renderPlace(res));   // добавление новой карточки через экземпляр Section
        popupAddPlace.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupAddPlace.changeBtnSubmitText('Сохранить'));
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
