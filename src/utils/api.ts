const BASE_URL = "https://norma.nomoreparties.space/api";

class Api {
  constructor(private baseUrl: string) {}

  getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this.getResponseData(res));
  }

  submitOrder(ingredients: Array<string>, token: string) {
    return fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ ingredients: ingredients }),
    }).then((res) => this.getResponseData(res));
  }

  register(email: string, password: string, name: string) {
    return fetch(`${this.baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this.getResponseData(res));
  }

  login(email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this.getResponseData(res));
  }

  refreshToken() {
    return fetch(`${this.baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then((res) => this.getResponseData(res));
  }

  logout(token: string) {
    return fetch(`${this.baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then((res) => this.getResponseData(res));
  }

  getUser(token: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => this.getResponseData(res));
  }

  updateUser(token: string, email: string, name: string) {
    return fetch(`${this.baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ email, name }),
    }).then((res) => this.getResponseData(res));
  }

  passwordReset(email: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((res) => this.getResponseData(res));
  }

  passwordResetSubmit(password: string, token: string) {
    return fetch(`${this.baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this.getResponseData(res));
  }

  private getResponseData(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api(BASE_URL);
export default api;
