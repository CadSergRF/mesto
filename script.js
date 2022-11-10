let placeLike = document.querySelector('.place__like');
placeLike.addEventListener('click', function () {
    placeLike.classList.toggle('place__like_active');
})

let userProfileEdit = document.querySelector('.user-profile__edit');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupSave = document.querySelector('.popup__save');

function openPopup() {
    let openPopup = document.querySelector('.popup');
    openPopup.classList.add('popup_opened');
}
function closePopup() {
    let close = document.querySelector('.popup');
    close.classList.remove('popup_opened');
}

userProfileEdit.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupSave.addEventListener('click', closePopup);