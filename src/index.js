import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchEngine from "./SearchEngine";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="SearchEngine">
      <h1>Weather Search Engine</h1>

      <SearchEngine />
    </div>
    <footer>
      <a
        href="https://github.com/MarianaMotaSilva/weather-react-MS"
        target="blank"
      >
        {" "}
        This code is open-sourced
      </a>{" "}
      , made by
      <a href="https://github.com/MarianaMotaSilva" target="blank">
        {" "}
        Mariana Silva{" "}
      </a>
      and hosted at
      <a href="https://master--soft-cactus-60d574.netlify.app/" target="blank">
        {" "}
        Netlify.{" "}
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
