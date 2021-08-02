'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactiontype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transactiontype.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transactiontype',
  });
  return Transactiontype;
};