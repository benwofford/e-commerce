// TODO: import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// TODO: import our database connection from config.js
const sequelize = require("../config/connection");

// TODO: Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// TODO: set up fields and rules for Product model
Product.init(
  {
    // TODO: define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
