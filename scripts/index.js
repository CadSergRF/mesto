const initialPlaces = [
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

const editProfileForm = document.forms.editProfile;
const addPlaceForm = document.forms.addPlace;
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('#edit-profile'); // Popup редактирования профиля пользователя
const popupAddPlace = document.querySelector('#add-place'); // Popup редактирования профиля пользователя
let popupCloseBtn = document.querySelectorAll('.popup__close-btn'); //Кнопка закрытия PopUp
const userProfileEditBtn = document.querySelector('.user-profile__edit'); // Кнопка открытия popup редактирования профиля пользователя
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');
const userProfileAddPlaceBtn = document.querySelector('.user-profile__add-place'); //Кнопка добавления нового place
const placesListElement = document.querySelector('.places__list'); // Область добавления карточек place


function openPopup(event) {                      /* Открытие PopUp */

  if (event.target.classList.contains('user-profile__edit')) {  //Popup редактирования профиля
    popupEditProfile.classList.add('popup_opened');
    editProfileForm.elements.editProfileName.value = userName.textContent;  // Показываем текущее значение
    editProfileForm.elements.editProFileJob.value = userJob.textContent;
  };

  if (event.target.classList.contains('user-profile__add-place')) {  //Popup добавления нового place
    popupAddPlace.classList.add('popup_opened');
  };
};

function closePopup(event) {                //Закрытие любого Popup
  if (event.target.classList.contains('popup__close-btn')) {
    event.target.closest('.popup').classList.remove('popup_opened');
  };
};

function addPlace(name, link) {             // Добавление нового place
  const placeTemplateElement = document.querySelector('#placeTemplate').content;
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = link;
  placeElement.querySelector('.place__image').alt = name; //Дополнительно прописываем alt для изображения
  placeElement.querySelector('.place__title').textContent = name;

  placesListElement.prepend(placeElement);
}

function formSubmitHandler(evt) {           /* Редактирование профиля - сохранение изменений */
  evt.preventDefault();
  userName.textContent = popupName.value;   /* Сохраняем введенные данные */
  userJob.textContent = popupJob.value;
  closePopup();
}

/* Загрузка начального контента на страницу */
initialPlaces.forEach(elem => addPlace(elem.name, elem.link));

/* Обработчики событий */
// formEditProfile.addEventListener('submit', formSubmitHandler);

userProfileEditBtn.addEventListener('click', openPopup);
userProfileAddPlaceBtn.addEventListener('click', openPopup);
popupCloseBtn.forEach(elem => elem.addEventListener('click', closePopup));
