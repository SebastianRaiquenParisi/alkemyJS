'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Category, {
        as:"categories",
        foreignKey:"category_id"
      }),
      Transaction.belongsTo(models.User, {
        as:"users",
        foreignKey:"user_id"
      }),
      Transaction.belongsTo(models.Transactiontype, {
        as:"transactiontypes",
        foreignKey:"type_id"
      })
    }
  };
  Transaction.init({
    concept: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};