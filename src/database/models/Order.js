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
      Order.hasMany(models.Cart,{
        foreignKey : 'orderId',
        as : 'cart',
        onDelete : 'cascade'
      });
      Order.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId'
      });
      Order.belongsTo(models.State,{
        as: 'statuses',
        foreignKey: 'statusesId'
      })
    }
  }
  Order.init({
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    statusesId: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};


