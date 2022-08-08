import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter basename="/react-burger">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
