const popupElement = document.querySelector('.popup');
const formEditProfile = document.getElementById('popup__form');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupEditName = document.querySelector('.popup__input_edit_name');
const popupEditJob = document.querySelector('.popup__input_edit_job');
const userProfileEdit = document.querySelector('.user-profile__edit');
const userName = document.querySelector('.user-profile__name');
const userJob = document.querySelector('.user-profile__job');

// Открытие и закрытие PopUp
function openPopup() {
  popupElement.classList.add('popup_opened');
  // Заполняем поля текущим значением
  popupEditName.value = userName.textContent;
  popupEditJob.value = userJob.textContent;
};

function closePopup() {
  popupElement.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = popupEditName.value;
  userJob.textContent = popupEditJob.value;

  closePopup();
}


formEditProfile.addEventListener('submit', formSubmitHandler);
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
