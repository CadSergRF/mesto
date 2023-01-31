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

  async getInitialCards() {    //  запрос карточек
    const res = await fetch(`${this._baseUrl}/cards`,
      {
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  async getUserInfo() {    //  Запрос инфо о пользователе
    const res = await fetch(`${this._baseUrl}/users/me`,
      {
        headers: this._headers
      });
    return this._responceProcessing(res);
  }

  async editUserInfo(userData) {
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


}

