import express from "express";
import { engine } from "express-handlebars"; // "express-handlebars"

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/news", (req, res) => {
	res.render("news");
});

app.listen(3000, () => {
	console.log("express-handlebars example server listening on: 3000");
});