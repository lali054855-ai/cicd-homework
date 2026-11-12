const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, I'm Lali" });
});

app.get("/about", (req, res) => {
  res.json({ hobby: "listening to music" });
});

if (require.main === module) {
  app.listen(3000, "0.0.0.0");
}

module.exports = app;