import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoute from "./routes/routes.js";

const App = express();

const Directorio = dirname(fileURLToPath(import.meta.url));

App.set("views", join(Directorio, "views"));
App.set("view engine", "ejs");

App.use(indexRoute);
App.use(express.static(join(Directorio, 'public'))) /* Ruta css */

App.listen(3000);
