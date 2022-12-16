'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // street: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // province: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // city: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // phone: {
      //   type: Sequelize.INTEGER,
      // },
      // height: {
      //   type: Sequelize.INTEGER,
      // },
      avatar:{
        type: Sequelize.STRING
      },
      rolId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName : 'Rols'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deleteAt:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};