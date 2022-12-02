const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Pokemon App!</h1>`);
});

const pokemon = require("./models/pokemon.js");
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
