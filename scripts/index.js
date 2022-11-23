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

const popup = document.querySelector('.popup');
const formEditProfile = document.getElementById('popup__form');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupName = document.querySelector('.popup__input_edit_name');
const popupJob = document.querySelector('.popup__input_edit_job');
const userProfileEdit = document.querySelector('.user-profile__edit');
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');
const placesListElement = document.querySelector('.places__list');


function openPopup() {                      /* Открытие PopUp */
  popup.classList.add('popup_opened');
  popupName.value = userName.textContent;   /* Заполняем поля текущим значением */
  popupJob.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function addPlace(name, link) {
  const placeTemplateElement = document.querySelector('#placeTemplate').content;
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = link;
  placeElement.querySelector('.place__image').alt = name;
  placeElement.querySelector('.place__title').textContent = name;

  placesListElement.prepend(placeElement);
}

function formSubmitHandler(evt) {           /* Редактирование профиля - сохранение изменений */
  evt.preventDefault();
  userName.textContent = popupName.value;   /* Сохраняем введенные данные */
  userJob.textContent = popupJob.value;
  closePopup();
}

initialPlaces.forEach(elem => addPlace(elem.name, elem.link));  /* Заполняем контентом */

formEditProfile.addEventListener('submit', formSubmitHandler);
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
