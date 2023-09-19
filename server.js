const express = require("express");
const app = express();

const chocky = 99;

app.get("/", function (req, res) {
  res.send(`<h1>99 Bottles of chocolate milk on the wall.</h1>
  <br>
  <a href="/${chocky - 1}">Take one down, pass it around.</a>
  `);
});
app.get("/:number_of_bottles", (req, res) => {
  const numChocky = parseFloat(req.params.number_of_bottles);
  if (numChocky === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <br>
      <a href="/">Chug some more!</a>
    `);
  } else {
    res.send(`
    <h1>${numChocky} Bottles of chocolate milk on the wall</h1>
    <br>
    <a href="/${numChocky - 1}">Take one down, pass it around</a>
    <br>
    <a href="/">Start over</a>
    `);
  }
});

app.listen(3000, () => {
  console.log("listening");
});
