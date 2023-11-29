const express = require("express");
const { engine } = require("express-handlebars");
const handlers = require("./lib/handlers");
const app = express();

const port = 5000;

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", handlers.home);

app.get("/about", handlers.about);

app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => console.log(`Serving on ${port}`));
