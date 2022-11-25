/* Переменные */
const formEditProfile = document.forms.editProfile;   // Форма редактирования профиля
const formAddPlace = document.forms.addPlace;         // Форма добавления place
const popupList = document.querySelectorAll('.popup');    // для общих правил. Обращение к определенному будет через id.
const popupEditProfile = document.querySelector('#edit-profile'); // id Popup редактирования профиля пользователя
const popupAddPlace = document.querySelector('#add-place'); // id Popup редактирования профиля пользователя
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
}

function fillFormEditProfile(selectedForm) {  // Функция заполнения полей form текущими значениями
  selectedForm.elements.editProfileName.value = userName.textContent;
  selectedForm.elements.editProFileJob.value = userJob.textContent;
}

function fillEnhanceImageValue(event) { // Увеличение картинок.
  popupImageBig.src = event.target.src;
  popupImageTitle.textContent = event.currentTarget.querySelector('.place__title').textContent;
}

function openPopupOptional(event) {                      /* Выбор окна Popup для открытия */
  if (event.target.classList.contains('user-profile__edit')) {  //Popup редактирования профиля
    fillFormEditProfile(formEditProfile);
    openPopup(popupEditProfile);
  };
  if (event.target.classList.contains('user-profile__add-place')) {  //Popup добавления нового place
    openPopup(popupAddPlace);
  };
  if (event.target.classList.contains('place__image')) {  // Popup увеличение картинки по клику
    fillEnhanceImageValue(event, popupEnhanceImage);
    openPopup(popupEnhanceImage);
  }
};

function closePopup(event) {    // Закрытие Popup
  event.target.closest('.popup').classList.remove('popup_opened');
}

function closePopupButton(event) {                //Закрытие любого Popup через крестик
  if (event.target.classList.contains('popup__close-btn')) {
    closePopup(event);
  };
};

function handleSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = formEditProfile.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = formEditProfile.elements.editProFileJob.value;
  closePopup(event);
}

function createPlace(placeData) {              // Создание нового place - принимает объект
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = placeData.link; // Ссылка на картинку
  placeElement.querySelector('.place__image').alt = placeData.name; //Дополнительно прописываем alt для изображения
  placeElement.querySelector('.place__title').textContent = placeData.name; // Название place

  placeElement.querySelector('.place__like').addEventListener('click', likePlace);  // Обработчик like
  placeElement.querySelector('.place__delete').addEventListener('click', deletePlace); // Обработчик delete
  placeElement.querySelector('.place').addEventListener('click', openPopupOptional); // Увеличение по клику

  return placeElement;    // Возвращаем готовый элемент
}

function renderPlace(item) {
  placesListElement.prepend(createPlace(item)); // Добавляем элемент на страницу
}

function handleAddPlace(event) {                    // Добавление нового place
  event.preventDefault();                     // убираем стандартное событие
  const addPlaceName = formAddPlace.elements.addPlaceName.value;
  const addPlaceLink = formAddPlace.elements.addPlaceLink.value;
  const newPlace = {name: addPlaceName, link: addPlaceLink};
  renderPlace(newPlace);
  formAddPlace.reset(); // Очистка полей формы
  closePopup(event);
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
userProfileEditBtn.addEventListener('click', openPopupOptional);
userProfileAddPlaceBtn.addEventListener('click', openPopupOptional);
popupCloseBtnList.forEach(elem => elem.addEventListener('click', closePopupButton));
formEditProfile.addEventListener('submit', handleSubmitProfile);
formAddPlace.addEventListener('submit', handleAddPlace);
