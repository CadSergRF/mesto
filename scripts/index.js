const popup = document.querySelector('.popup');
const formEditProfile = document.getElementById('popup__form');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupName = document.querySelector('.popup__input_edit_name');
const popupJob = document.querySelector('.popup__input_edit_job');
const userProfileEdit = document.querySelector('.user-profile__edit');
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');

// Открытие и закрытие PopUp
function openPopup() {
  popup.classList.add('popup_opened');
  // Заполняем поля текущим значением
  popupName.value = userName.textContent;
  popupJob.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupName.value;
  userJob.textContent = popupJob.value;

  closePopup();
}


formEditProfile.addEventListener('submit', formSubmitHandler);
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
