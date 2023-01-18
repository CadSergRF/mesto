/* Переменные */
import { initialPlaces } from '../utils/places.js';    //  начальные карточки
import { configValidation } from '../utils/configs.js';   //  конфиг валидации
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { formEditProfile, formAddPlace, btnClosePopup, rootElem, popupList, popupEditProfile, popupAddPlaceElem, popupEnhanceImage, placeTemplateElement,
  popupCloseBtnList, userProfileEditBtn, userName, userJob, userProfileAddPlaceBtn,
  placesListElement, popupImageBig,
  popupImageTitle }  from '../utils/pageElements.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

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
})

/* Функции */
// function openPopup(popup) {  // открытие popup
//   rootElem.addEventListener('keyup', closePopupByEsc);
//   popup.classList.add('popup_opened');
// };

// function fillFormEditProfile(selectedForm) {  // Функция заполнения полей form текущими значениями
//   selectedForm.elements.editProfileName.value = userName.textContent;
//   selectedForm.elements.editProFileJob.value = userJob.textContent;
// };

// function handleOpenProfilePopup() {   //Popup редактирования профиля
//   fillFormEditProfile(formEditProfile);
//   profileIsValid.checkOpenedPopup();
//   openPopup(popupEditProfile);
// };

function handleBigImagePopup(placeData) { // Popup увеличение картинки по клику - На вход объект
  popupImageBig.src = placeData.link;
  popupImageBig.alt = placeData.name;
  popupImageTitle.textContent = placeData.name;
  openPopup(popupEnhanceImage);
};

// function handleOpenAddPlacePopup() {
//   formAddPlace.reset(); // Очистка полей формы. Т.к. если повторно открыть форму сохраняются прошлые не валидные значения
//   newCardIsValid.checkOpenedPopup();

//   openPopup(popupAddPlace);
// }

// function closePopup(popup) {    // Закрытие Popup
//   popup.classList.remove('popup_opened');
//   rootElem.removeEventListener('keyup', closePopupByEsc);
// };

// function closePopupButton(event) {                //Закрытие любого Popup через крестик
//   if (event.target.classList.contains('popup__close-btn')) {
//     closePopup(event.target.closest('.popup'));
//     //можно и тут передавать переменную по id, но тогда придется делать конструкцию swith-case. Только увеличит код.
//   };
// };

// function closePopupByOverlay(event) {           // Закрытие по клику на Oveerlay
//   if (event.target.classList.contains('popup_opened')) {
//     closePopup(event.target);
//   }
// };

// function closePopupByEsc(event) {             // Закрытие по Esc
//   if (event.key === btnClosePopup) {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// };

function handleSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = formEditProfile.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = formEditProfile.elements.editProFileJob.value;
  closePopup(popupEditProfile);
}

// function renderPlace(item) {
//   const card = new Card(item, placeTemplateElement, handleBigImagePopup);
//   const newCard = card.createCard();
//   placesListElement.prepend(newCard); // Добавляем элемент на страницу;
// }

// function handleAddPlace(event) {    // Добавление нового place
//   event.preventDefault();   // убираем стандартное событие
//   const newPlaceName = formAddPlace.elements.newPlaceName.value;
//   const newPlaceLink = formAddPlace.elements.newPlaceLink.value;
//   const newPlace = { name: newPlaceName, link: newPlaceLink };
//   renderPlace(newPlace);
//   formAddPlace.reset(); // Очистка полей формы
//   closePopup(popupAddPlace);
// }

/* Загрузка начального контента на страницу */
//initialPlaces.forEach(elem => renderPlace(elem));     // Создание через объект
function renderPlace(item) {
  const card = new Card(item, placeTemplateElement, handleBigImagePopup);
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
