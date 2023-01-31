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

  getInitialCards() {    //  запрос карточек
    return fetch(`${this._baseUrl}/cards`,
    {
      headers: this._headers
    })
      .then(res => this._responceProcessing(res));
  }

  getUserInfo(res) {    //  Запрос инфо о пользователе
    return fetch(`${this._baseUrl}/users/me`,
    {
      headers: this._headers
    })
      .then(res => this._responceProcessing(res));
  }


  }

