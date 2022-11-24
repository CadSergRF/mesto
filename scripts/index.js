/* Переменные */
const initialPlaces = [  // Начальная база places
  {
    name: 'Кузнецкий Алатау',
    link: './img/content/kuzneckij-alatau.jpg'
  },
  {
    name: 'Озеро Байкал',
    link: './img/content/ozero-baykal.jpg'
  },
  {
    name: 'Красноярские столбы',
    link: './img/content/krasnoyarskie-stolbi.jpg'
  },
  {
    name: 'Перевал Кату-ярык',
    link: './img/content/pereval-katu-yarik.jpg'
  },
  {
    name: 'Телецкое озеро',
    link: './img/content/ozero-teleckoe.jpg'
  },
  {
    name: 'Шерегеш. Гора Зеленая',
    link: './img/content/sheregesh-gora-zelenaya.jpg'
  },
]

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
    popupEnhanceImage.classList.add('popup_big-image');
    popupEnhanceImage.classList.add('popup_opened');
  }
};

function closePopup(event) {                //Закрытие любого Popup
  if (event.target.classList.contains('popup__close-btn')) {
    event.target.closest('.popup').classList.remove('popup_opened');
  };
};

function formSubmitProfile(event) {           /* Редактирование профиля - сохранение изменений */
  event.preventDefault();
  userName.textContent = editProfileForm.elements.editProfileName.value;   /* Сохраняем введенные данные */
  userJob.textContent = editProfileForm.elements.editProFileJob.value;
  event.target.closest('.popup').classList.remove('popup_opened');
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
  event.target.closest('.popup').classList.remove('popup_opened');
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
// likeIconBtn.forEach(elem => elem.addEventListener('click ', likePlace));
// likePlace();
