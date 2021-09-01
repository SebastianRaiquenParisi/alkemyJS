const db = require("../db/old.models");
const Categories = db.Category;
const Transactions = db.Transaction;
const TransactionTypes = db.Transactiontype;
const Users = db.User;

const transactionsApiController = {
    'index' : async (req,res)=>{
        const transactions = await TransactionTypes.findAll();
        res.json(transactions);
    }
}
module.exports=transactionsApiController;