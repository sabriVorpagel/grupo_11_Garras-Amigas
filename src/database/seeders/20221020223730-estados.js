'use strict';
const estados = ['Pendiente', 'Retrasado', 'In pago', 'Finalizado']

const status = estados.map(estado =>{
  return{
    name: estado,
    createdAt: new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Statuses', status, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Statuses', null, {});
  }
};

