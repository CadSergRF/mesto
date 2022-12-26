/* Переменные */
import { initialPlaces } from './places.js';    //  начальные карточки
import { configValidation } from './configValidation.js';   //  конфиг валидации
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const formEditProfile = document.forms.editProfile;   // Форма редактирования профиля
const formAddPlace = document.forms.addPlace;         // Форма добавления place
const btnClosePopup = 'Escape';       // кнопка закрытия Popup
const rootElem = document.querySelector('.root')      // общий элемент
const popupList = document.querySelectorAll('.popup');    // для общих правил. Обращение к определенному будет через id.
const popupEditProfile = document.querySelector('#edit-profile'); // id Popup редактирования профиля пользователя
const popupAddPlace = document.querySelector('#add-place'); // id Popup добавление картинки
const popupEnhanceImage = document.querySelector('#enhance-image'); // id Popup увеличение картинки по клику
const placeTemplateElement = document.querySelector('#placeTemplate').content; // id шаблон карточки place
const popupCloseBtnList = document.querySelectorAll('.popup__close-btn'); //Кнопка закрытия PopUp
const userProfileEditBtn = document.querySelector('.user-profile__edit'); // Кнопка открытия popup редактирования профиля пользователя
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');
const userProfileAddPlaceBtn = document.querySelector('.user-profile__add-place'); //Кнопка добавления нового place
const placesListElement = document.querySelector('.places__list'); // Область добавления карточек place
const popupImageBig = document.querySelector('.popup__image-big');  // Увеличенная картинка
const popupImageTitle = document.querySelector('.popup__image-title'); // Подпись к popupImageBig
const profileIsValid = new FormValidator(configValidation, formEditProfile); // экз. Валидатора для профиля
const newCardIsValid = new FormValidator(configValidation, formAddPlace); // экз. Валидатора для добавления карточки

/* Функции */
function openPopup(popup) {  // открытие popup
  rootElem.addEventListener('keyup', closePopupByEsc);
  popup.classList.add('popup_opened');
};

function fillFormEditProfile(selectedForm) {  // Функция заполнения полей form текущими значениями
  selectedForm.elements.editProfileName.value = userName.textContent;
  selectedForm.elements.editProFileJob.value = userJob.textContent;
};

function handleOpenProfilePopup() {   //Popup редактирования профиля
  fillFormEditProfile(formEditProfile);
  profileIsValid.checkOpenedPopup();
  profileIsValid.enableValidation();
  openPopup(popupEditProfile);
};

function handleBigImagePopup(placeData) { // Popup увеличение картинки по клику - На вход объект
  popupImageBig.src = placeData.link;
  popupImageBig.alt = placeData.name;
  popupImageTitle.textContent = placeData.name;
  openPopup(popupEnhanceImage);
};

function handleOpenAddPlacePopup() {
  formAddPlace.reset(); // Очистка полей формы. Т.к. если повторно открыть форму сохраняются прошлые не валидные значения
  newCardIsValid.checkOpenedPopup();
  newCardIsValid.enableValidation();

  openPopup(popupAddPlace);
}

function closePopup(popup) {    // Закрытие Popup
  popup.classList.remove('popup_opened');
  rootElem.removeEventListener('keyup', closePopupByEsc);
};

function closePopupButton(event) {                //Закрытие любого Popup через крестик
  if (event.target.classList.contains('popup__close-btn')) {
    closePopup(event.target.closest('.popup'));
    //можно и тут передавать переменную по id, но тогда придется делать конструкцию swith-case. Только увеличит код.
  };
};

function closePopupByOverlay(event) {           // Закрытие по клику на Oveerlay
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
};

function closePopupByEsc(event) {             // Закрытие по Esc
  if (event.key === btnClosePopup) {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function handleSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = formEditProfile.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = formEditProfile.elements.editProFileJob.value;
  closePopup(popupEditProfile);
}

function renderPlace(item) {
  const card = new Card(item, placeTemplateElement, handleBigImagePopup);
  const newCard = card.createCard();
  placesListElement.prepend(newCard); // Добавляем элемент на страницу;
}

function handleAddPlace(event) {    // Добавление нового place
  event.preventDefault();   // убираем стандартное событие
  const newPlaceName = formAddPlace.elements.newPlaceName.value;
  const newPlaceLink = formAddPlace.elements.newPlaceLink.value;
  const newPlace = { name: newPlaceName, link: newPlaceLink };
  renderPlace(newPlace);
  formAddPlace.reset(); // Очистка полей формы
  closePopup(popupAddPlace);
}

/* Загрузка начального контента на страницу */
initialPlaces.forEach(elem => renderPlace(elem));     // Создание через объект

/* Обработчики событий */
userProfileEditBtn.addEventListener('click', handleOpenProfilePopup);
userProfileAddPlaceBtn.addEventListener('click', handleOpenAddPlacePopup);
popupCloseBtnList.forEach(elem => elem.addEventListener('click', closePopupButton));
popupList.forEach(elem => elem.addEventListener('click', closePopupByOverlay));
formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddPlace.addEventListener('submit', handleAddPlace);
