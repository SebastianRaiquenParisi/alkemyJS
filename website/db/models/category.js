'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Transaction, {
        as:"categories",
        foreignKey:"category_id"
      });
    }
  };
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    tablename:"categories",
    modelName: 'Category'
  });
  return Category;
};