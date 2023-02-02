export class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  _responceProcessing(res) { // обратотка одна на всех))
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка в Api: ${res.status}`); // если ошибка, отклоняем промис
  }

  async getUserInfo() {    //  Запрос инфо о пользователе
    const res = await fetch(`${this._baseUrl}/users/me`,
      {
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  async editUserInfo(userData) {    //  Редактирование профиля
    const res = await fetch(`${this._baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: userData.editProfileName,
          about: userData.editProFileJob
        })
      });
    return this._responceProcessing(res);
  }

  async editUserAvatar(link) {    //  Редактирование аватара пользователя
    const res = await fetch(`${this._baseUrl}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: link
        })
      });
    return this._responceProcessing(res);
  }

  async getInitialCards() {    //  запрос карточек
    const res = await fetch(`${this._baseUrl}/cards`,
      {
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  async addNewCard(cardData) {    //  добавление новой карточки
    const res = await fetch(`${this._baseUrl}/cards`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: cardData.name,
          link: cardData.link
        })
      });
    return this._responceProcessing(res);
  }

  async deleteCard(cardID) {    //  удаление карточки
    const res = await fetch(`${this._baseUrl}/cards/${cardID}`,
      {
        method: 'DELETE',
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  // ЛАЙКИ //
  async addLike(cardID) {    //  удаление карточки
    const res = await fetch(`${this._baseUrl}/cards/${cardID}/likes`,
      {
        method: 'PUT',
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  async deleteLike(cardID) {    //  удаление карточки
    const res = await fetch(`${this._baseUrl}/cards/${cardID}/likes`,
      {
        method: 'DELETE',
        headers: this._headers
      });
    return this._responceProcessing(res);
  }
}

