const express = require("express");

const router = express().Router;

router.get("/", (req, res) => {
  res.send("user");
});
//localhost:8000/user/1234?
router.get("/:id", (req, res) => {
  res.send(id);
});

module.exports = router;
