const express = require("express");

const router = express.Router();

const apiTransactionRouter = require("./api/transactionsRouter")

router.use("/transactions", apiTransactionRouter);

module.exports=router;