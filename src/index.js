import "./style.css";
import { renderHome } from "./home.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";

window.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById("content");
  const homeContent = renderHome();
  contentDiv.appendChild(homeContent);
});

const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  const contactContent = renderContact();
  contentDiv.appendChild(contactContent);
})

const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  const homeContent = renderHome();
  contentDiv.appendChild(homeContent);
})

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  const menuContent = renderMenu();
  contentDiv.appendChild(menuContent);
})

console.log("it works!");