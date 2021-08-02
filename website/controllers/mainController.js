const db = require("../db/models");
const Categories = db.Category;
const Transactions = db.Transaction;
const TransactionTypes = db.Transactiontypes;
const Users = db.User;

const mainController = {
    'index' : async (req,res)=>{
        res.send('hola mundo');
    }
}
module.exports=mainController;