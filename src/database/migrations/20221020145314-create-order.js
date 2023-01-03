'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName : 'Users'
          },
          key: 'id'
        }
      },
      statusesId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName : 'Statuses'
          },
          key: 'id'
        }
      },
      payRoleId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName : 'Payroles'
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
    await queryInterface.dropTable('Orders');
  }
};