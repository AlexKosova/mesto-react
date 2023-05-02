class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _request(link, options) {
    return fetch(link, options)
      .then(res => {
      if (res.ok) {return res.json()}
    return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  getInitialCards() {
    return this._request(`${this._url}/cards`, {
    headers: this._headers
    })
  }

  editprofile(inputValue) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: inputValue.userName,
        about: inputValue.userJobInput
      })
    })
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers
    })
  }

  addCard (element) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: element.postTitleInput,
        link: element.postLinkInput,
      })
      })
  }

  setLike (cardId) {
    return this._request(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
  }

  deleteLike (cardId) {
    return this._request(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  editPhoto (element) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: element.photoLinkInput
      })
    })
  }

  deleteCard (cardId) {
    return this._request(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
}

const api = new Api ({ baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
headers: {
  authorization: "fb85a167-fa0c-4b77-b6c4-6e80ca894d63",
  "Content-Type": "application/json",
},})

export default api