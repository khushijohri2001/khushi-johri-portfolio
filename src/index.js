import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Routes } from "react-router-dom";
import { ActiveLinkProvider } from "./context/active-link-context";
import { MediaMatchProvider } from "./context/media-match-context";
import { MenuProvider } from "./context/menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes>
      <MediaMatchProvider>
          <ActiveLinkProvider>
        <MenuProvider>
            <App />
        </MenuProvider>
          </ActiveLinkProvider>
      </MediaMatchProvider>
    </Routes>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
