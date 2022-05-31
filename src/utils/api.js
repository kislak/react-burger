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
