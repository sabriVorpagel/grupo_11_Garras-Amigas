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
      this.hasMany(models.Cart,{
        foreignKey : 'orderId',
        as : 'carts'
      })
      this.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId'
      });
      this.belongsTo(models.State,{
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


