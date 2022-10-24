'use strict';
const estados = ['Pendiente', 'Retrasado', 'In pago', 'Finalizado']

const states = estados.map(estado =>{
  return{
    state: estado,
    createdAt: new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('States', states, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('States', null, {});
  }
};

