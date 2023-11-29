const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));

const fortunes = ["quote1", "quote2", "quote3", "quote4", "quote5"];
app.get("/about", (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomFortune });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.render("500");
});
app.listen(port, () => console.log(`Serving on ${port}`));
