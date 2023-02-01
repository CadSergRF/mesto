export class Card {
  constructor(cardData, template, userID, { handleCardClick, handleCardDelete }) {
    this._cardData = cardData;    //  объект отдельной карточки
    this.template = template;
    this._userID = userID;
    this._handleCardClick = handleCardClick;    //  функция попап изображения
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {    //  клонируем шаблон
    const cardElement = this.template
      .querySelector('.places__item')
      .cloneNode(true);

    return cardElement;
  }

  _addListeners() {   //  добавляем слушатели
    this._cardLike.addEventListener('click', this._likeCard);
    // this._cardDelete.addEventListener('click', this._deleteCard);
    // this._cardFull.addEventListener('click', () => this._handleCardClick(this._cardData));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._cardData));
    this._cardDelete.addEventListener('click', () => this._handleCardDelete(this._cardData));
  }

  _likeCard = (event) => {
    event.stopPropagation(); // Запрет всплытия event
    this._cardLike.classList.toggle('place__like_active');
  }

  deleteCard = () => {
    this._element.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.place__image');
    this._cardLike = this._element.querySelector('.place__like');
    this._cardDelete = this._element.querySelector('.place__delete');
    this._cardFull = this._element.querySelector('.place');
    this._cardNumOfLikes = this._element.querySelector('.place__num-of-likes');

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this.cardID = this._cardData._id;
    this._element.querySelector('.place__title').textContent = this._cardData.name;
    this._cardNumOfLikes.textContent = this._cardData.likes.length;

    if (this._userID != this._cardData.owner._id) {
      this._cardDelete.remove();
    }



    this._addListeners();

    return this._element;
  }
}
