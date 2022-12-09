/* Переменные */
import { initialPlaces } from './places.js';

const formEditProfile = document.forms.editProfile;   // Форма редактирования профиля
const formAddPlace = document.forms.addPlace;         // Форма добавления place
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

/* Функции */
function openPopup(idPopup) {  // открытие popup
  idPopup.classList.add('popup_opened');
};

function fillFormEditProfile(selectedForm) {  // Функция заполнения полей form текущими значениями
  selectedForm.elements.editProfileName.value = userName.textContent;
  selectedForm.elements.editProFileJob.value = userJob.textContent;
};

function fillEnhanceImageValue(event) { // Увеличение картинок.
  popupImageBig.src = event.target.src;
  popupImageTitle.textContent = event.currentTarget.querySelector('.place__title').textContent;
};

function handleOpenProfilePopup() {   //Popup редактирования профиля
  fillFormEditProfile(formEditProfile);
  openPopup(popupEditProfile);
};

function handleBigImagePopup(event) {
  if (event.target.classList.contains('place__image')) {  // Popup увеличение картинки по клику
    fillEnhanceImageValue(event);
    openPopup(popupEnhanceImage);
  }
};

function closePopup(idPopup) {    // Закрытие Popup
  idPopup.classList.remove('popup_opened');
};

function closePopupButton(event) {                //Закрытие любого Popup через крестик
  if (event.target.classList.contains('popup__close-btn')) {
    event.target.closest('.popup').classList.remove('popup_opened');
    //можно и тут передавать переменную по id, но тогда придется делать конструкцию swith-case. Только увеличит код.
  };
};

function closePopupByOverlay(event) {           // По клику на Oveerlay
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
};

function closePopupByEsc(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function handleSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = formEditProfile.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = formEditProfile.elements.editProFileJob.value;
  closePopup(popupEditProfile);
}

function createPlace(placeData) {              // Создание нового place - принимает объект
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = placeData.link; // Ссылка на картинку
  placeElement.querySelector('.place__image').alt = placeData.name; //Дополнительно прописываем alt для изображения
  placeElement.querySelector('.place__title').textContent = placeData.name; // Название place

  placeElement.querySelector('.place__like').addEventListener('click', likePlace);  // Обработчик like
  placeElement.querySelector('.place__delete').addEventListener('click', deletePlace); // Обработчик delete
  placeElement.querySelector('.place').addEventListener('click', handleBigImagePopup); // Увеличение по клику

  return placeElement;    // Возвращаем готовый элемент
}

function renderPlace(item) {
  placesListElement.prepend(createPlace(item)); // Добавляем элемент на страницу
}

function handleAddPlace(event) {                    // Добавление нового place
  event.preventDefault();                     // убираем стандартное событие
  const newPlaceName = formAddPlace.elements.newPlaceName.value;
  const newPlaceLink = formAddPlace.elements.newPlaceLink.value;
  const newPlace = { name: newPlaceName, link: newPlaceLink };
  renderPlace(newPlace);
  formAddPlace.reset(); // Очистка полей формы
  closePopup(popupAddPlace);
}

//Фунция отображения лайков
function likePlace(event) {
  event.target.classList.toggle('place__like_active');
};

// Функция удаления place
function deletePlace(event) {
  event.target.closest('.places__item').remove();
}

/* Загрузка начального контента на страницу */
initialPlaces.forEach(elem => renderPlace(elem));     // Создание через объект

/* Обработчики событий */
userProfileEditBtn.addEventListener('click', handleOpenProfilePopup);
userProfileAddPlaceBtn.addEventListener('click', () => openPopup(popupAddPlace));
popupCloseBtnList.forEach(elem => elem.addEventListener('click', closePopupButton));
popupList.forEach(elem => elem.addEventListener('click', closePopupByOverlay));
document.querySelector('.root').addEventListener('keyup', closePopupByEsc);
formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddPlace.addEventListener('submit', handleAddPlace);
