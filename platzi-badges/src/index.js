import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
/* import BadgeNew from "./pages/BadgeNew"; */
import Badges from "./pages/Badges.jsx";

const container = document.getElementById("app");

/* const element = <BadgeNew />; */

/* ReactDOM.render(<BadgeNew />, container); */
ReactDOM.render(<Badges />, container);
