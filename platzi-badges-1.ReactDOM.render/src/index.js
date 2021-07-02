// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const name = "Jorge";

const jsx = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy Ingeniero Frontend</p>
  </div>
);

/* let element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a Platzi"
);
 */
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
