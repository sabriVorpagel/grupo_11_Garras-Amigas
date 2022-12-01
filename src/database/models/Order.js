'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId'
      });
      Order.hasOne(models.State,{
        as: 'state',
        foreignKey: 'stateId'
      })
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};