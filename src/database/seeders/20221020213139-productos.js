'use strict';
const productos = require('../../data/datosSQL/garrasamigas_products.sql');

const products = productos.map(({name,price,discount,description,stock,categoryId}) => {
  return{
    name,
    price,
    discount,
    description,
    stock,
    categoryId,
    createdAt: new Date()
  }
});

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Products', products, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Products', null, {});
  }
};
