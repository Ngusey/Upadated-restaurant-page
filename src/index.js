
import "./style.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadContact);

loadHome();
