import "./style.css";
import { renderHome } from "./home.js";

window.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById("content");
  const homeContent = renderHome();
  contentDiv.appendChild(homeContent);
});

console.log("it works!");