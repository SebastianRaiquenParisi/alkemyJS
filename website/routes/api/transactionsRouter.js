const express = require("express");
const transactionsApiController = require("../../controllers/transactionsApiController");
const router = express.Router();

router.get("/", transactionsApiController.index)

module.exports=router;