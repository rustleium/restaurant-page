import "./style.css";
import { renderHome } from "./home.js";
import { renderContact } from "./contact.js";

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

console.log("it works!");