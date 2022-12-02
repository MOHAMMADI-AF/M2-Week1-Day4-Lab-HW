const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/", (req, res) => {
  res.render("Index", { pokemons: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", { pokemons: pokemon[req.params.id] });
});
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
