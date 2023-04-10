const express = require("express");
const router = express.Router();
const auditionsController = require("../controllers/auditionsController");

router.route("/").get(auditionsController.index);

module.exports = router;
