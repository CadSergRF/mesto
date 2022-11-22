const popup = document.querySelector('.popup');
const formEditProfile = document.getElementById('popup__form');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupName = document.querySelector('.popup__input_edit_name');
const popupJob = document.querySelector('.popup__input_edit_job');
const userProfileEdit = document.querySelector('.user-profile__edit');
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');


function openPopup() {                      /* Открытие PopUp */
  popup.classList.add('popup_opened');
  popupName.value = userName.textContent;   /* Заполняем поля текущим значением */
  popupJob.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {           /* Редактирование профиля - сохранение изменений */
  evt.preventDefault();
  userName.textContent = popupName.value;   /* Сохраняем введенные данные */
  userJob.textContent = popupJob.value;
  closePopup();
}


formEditProfile.addEventListener('submit', formSubmitHandler);
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
