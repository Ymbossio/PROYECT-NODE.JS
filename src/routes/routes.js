import { Router } from "express";

const Routes = Router();

Routes.get("/", (request, response) => {
  response.render("index", {title: 'Inicio'});
});

Routes.get("/about", (request, response) => {
  response.render("about", {title: 'About'});
});

Routes.get("/contact", (request, response) => {
  response.render("contact", {title: 'contact'});
});

export default Routes;
