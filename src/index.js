import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import LanguageProvider from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";
import ModalProvider from './context/ModalContext';
import * as serviceWorker from "./serviceWorker";

const app = (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  )

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
