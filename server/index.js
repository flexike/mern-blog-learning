const express = require("express");
const app = express();

app.get("/login", (req, res) => {});

app.post("/register", (req, res) => {});

app.listen(4000, () => {
  console.log("Server Started!");
});
