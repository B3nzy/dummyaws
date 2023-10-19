const express = require("express");
const server = express();
const port = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.send("Hello world!");
});

server.listen(port, (req, res) => {
  console.log(`Server running on port : ${port}`);
});
