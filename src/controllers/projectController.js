const express = require("express");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.use(authMiddleware);

router.get("/", (req, res) => {
  res.status(200).send({ ok: true, id: req.userId });
});

module.exports = app => app.use("/project", router);