const BASE_URL = "https://norma.nomoreparties.space/api";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getIngredients() {
    return fetch(`${this._baseUrl}/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  submitOrder(ingredients) {
    return fetch(`${this._baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredients }),
    }).then((res) => this._getResponseData(res));
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this._getResponseData(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._getResponseData(res));
  }

  refreshToken() {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then((res) => this._getResponseData(res));
  }

  logout(token) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then((res) => this._getResponseData(res));
  }

  getUser(token) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => this._getResponseData(res));
  }

  updateUser(token, email, name) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ email, name }),
    }).then((res) => this._getResponseData(res));
  }

  passwordReset(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((res) => this._getResponseData(res));
  }

  passwordResetSubmit(password, token) {
    return fetch(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;
