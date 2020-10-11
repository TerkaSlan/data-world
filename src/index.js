import { Home } from "./views/Home";
import { Page1 } from "./views/Page1";
import { Page2 } from "./views/Page2";
import { NotFound } from "./views/NotFound";
import { navigate } from "./js/utils";
import "./styles/index.scss";

const routes = {
  "/": Home,
  "/page1": Page1,
  "/page2": Page2,
};

let page = null;
const root = document.querySelector("#root");
const navLinks = document.querySelectorAll(".nav-link");

const loadContent = () => {
  const { pathname } = window.location;

  page?.cleanup();
  page = routes[pathname] || NotFound;
  root.innerHTML = page.render();
  page.effects();
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigate(link.href);
  });
});

window.onload = window.onpopstate = loadContent;
