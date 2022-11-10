let userProfileEdit = document.querySelector('.user-profile__edit');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupSave = document.querySelector('.popup__save');

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
    openPopup.classList.add('popup_opened');
}
function closePopup() {
    let close = document.querySelector('.popup');
    close.classList.remove('popup_opened');
}



likes();
userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupSave.addEventListener('click', closePopup);