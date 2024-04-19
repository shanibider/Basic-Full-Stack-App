// create server: npm init -y
// install: npm i axios cors express nodemon
// add: start: nodemon app.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "get" });
});

app.post("/", (req, res) => {
  const user = req.body.user;
  res.status(200).send({ message: "post " + user });
});

app.listen(8000, () => {
  console.log("app is listenning on port 8000");
});
