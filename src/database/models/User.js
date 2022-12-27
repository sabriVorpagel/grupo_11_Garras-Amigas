'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Rol,{
        foreignKey: 'rolId',
        as: 'rol'
      });
      this.hasMany(models.Order,{
        foreignKey: 'orderId',
        as: 'order'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    phone: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};