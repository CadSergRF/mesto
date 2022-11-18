let userProfileEdit = document.querySelector('.user-profile__edit');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let formEditProfile = document.getElementById('popup__form');
let popupName = document.querySelector('.popup__input_edit_name');
let userName = document.querySelector('.user-profile__name');
let popupJob = document.querySelector('.popup__input_edit_job');
let userJob = document.querySelector('.user-profile__job');
let popup = document.querySelector('.popup');

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
