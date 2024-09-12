import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by{" "}
          <a href="mailto:mariana.ssousasilva@gmail.com" rel="noreferrer">
            Mariana Mota da Silva
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MarianaMotaSilva"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/teams/marianamotasilva"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
