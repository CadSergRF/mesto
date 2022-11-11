let userProfileEdit = document.querySelector('.user-profile__edit');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let formEditProfile = document.getElementById('popup__form');

//Фунция отображения лайков
function likes() {
    let likeIcon = document.querySelectorAll('.place__like');
    for (let i = 0; i < likeIcon.length; i++) {
        likeIcon[i].addEventListener('click', function () {
            likeIcon[i].classList.toggle('place__like_active');
        })
    }
};

// Открытие и закрытие PopUp
function openPopup() {
    let openPopup = document.querySelector('.popup');
    let popupName = document.querySelector('.popup__input_name');
    let userName = document.querySelector('.user-profile__name');
    let popupJob = document.querySelector('.popup__input_job');
    let userJob = document.querySelector('.user-profile__job');
    
    openPopup.classList.add('popup_opened');
    // Заполняем поля текущим значением
    popupName.value = userName.textContent;
    popupJob.value = userJob.textContent;
};

function closePopup() {
    let close = document.querySelector('.popup');
    close.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    let popupName = document.querySelector('.popup__input_name');
    let userName = document.querySelector('.user-profile__name');
    let popupJob = document.querySelector('.popup__input_job');
    let userJob = document.querySelector('.user-profile__job');

    userName.textContent = popupName.value;
    userJob.textContent = popupJob.value;

    closePopup();
}


likes();
formEditProfile.addEventListener('submit', formSubmitHandler);
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);