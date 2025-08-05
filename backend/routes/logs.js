const express = require("express");
const router = express.Router();
const { getLogs, getSummary } = require("../controllers/logsController");

router.get("/", getLogs);
router.get("/summary", getSummary);

module.exports = router;
