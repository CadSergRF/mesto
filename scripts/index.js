/* Переменные */
const editProfileForm = document.forms.editProfile;   // Форма редактирования профиля
const addPlaceForm = document.forms.addPlace;         // Форма добавления place
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('#edit-profile'); // Popup редактирования профиля пользователя
const popupAddPlace = document.querySelector('#add-place'); // Popup редактирования профиля пользователя
const popupEnhanceImage = document.querySelector('#enhance-image'); // Popup увеличение картинки по клику
let popupCloseBtn = document.querySelectorAll('.popup__close-btn'); //Кнопка закрытия PopUp
const userProfileEditBtn = document.querySelector('.user-profile__edit'); // Кнопка открытия popup редактирования профиля пользователя
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');
const userProfileAddPlaceBtn = document.querySelector('.user-profile__add-place'); //Кнопка добавления нового place
const placesListElement = document.querySelector('.places__list'); // Область добавления карточек place
const popupImageBig = document.querySelector('.popup__image-big');  // Увеличенная картинка
const popupImageTitle = document.querySelector('.popup__image-title'); // Подпись к popupImageBig

/* Функции */
function openPopup(event) {                      /* Открытие PopUp */

  if (event.target.classList.contains('user-profile__edit')) {  //Popup редактирования профиля
    popupEditProfile.classList.add('popup_opened');
    editProfileForm.elements.editProfileName.value = userName.textContent;  // Показываем текущее значение
    editProfileForm.elements.editProFileJob.value = userJob.textContent;
  };

  if (event.target.classList.contains('user-profile__add-place')) {  //Popup добавления нового place
    popupAddPlace.classList.add('popup_opened');
  };

  if (event.target.classList.contains('place__image')) {  // Popup увеличение картинки по клику
    popupImageBig.src = event.target.src;
    popupImageTitle.textContent = event.currentTarget.querySelector('.place__title').textContent;
    popupEnhanceImage.classList.add('popup_opened');
  }
};

// Анимация закрытия
function animeClosePopup(event) {
  event.target.closest('.popup').classList.add('popup_opened_close'); // Плавное закрытие
  setTimeout(() => {                // Для показа анимации
    event.target.closest('.popup').classList.remove('popup_opened');
    event.target.closest('.popup').classList.remove('popup_opened_close');
  },
    690
  );
}

function closePopup(event) {                //Закрытие любого Popup через крестик
  if (event.target.classList.contains('popup__close-btn')) {
    animeClosePopup(event);
  };
};

function formSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = editProfileForm.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = editProfileForm.elements.editProFileJob.value;
  animeClosePopup(event);
}

function createPlace(name, link) {             // Создание нового place
  const placeTemplateElement = document.querySelector('#placeTemplate').content;
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = link; // Ссылка на картинку
  placeElement.querySelector('.place__image').alt = name; //Дополнительно прописываем alt для изображения
  placeElement.querySelector('.place__title').textContent = name; // Название place

  placeElement.querySelector('.place__like').addEventListener('click', likePlace);  // Обработчик like
  placeElement.querySelector('.place__delete').addEventListener('click', deletePlace); // Обработчик delete
  placeElement.querySelector('.place').addEventListener('click', openPopup); // Увеличение по клику

  placesListElement.prepend(placeElement);
}

function addPlace(event) {                    // Добавление нового place
  event.preventDefault();                     // убираем стандартное событие
  const addPlaceName = addPlaceForm.elements.addPlaceName.value;
  const addPlaceLink = addPlaceForm.elements.addPlaceLink.value;
  createPlace(addPlaceName, addPlaceLink);
  addPlaceForm.reset(); // Очистка полей формы
  animeClosePopup(event);
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
initialPlaces.forEach(elem => createPlace(elem.name, elem.link));

/* Обработчики событий */
userProfileEditBtn.addEventListener('click', openPopup);
userProfileAddPlaceBtn.addEventListener('click', openPopup);
popupCloseBtn.forEach(elem => elem.addEventListener('click', closePopup));
editProfileForm.addEventListener('submit', formSubmitProfile);
addPlaceForm.addEventListener('submit', addPlace);
