'use strict';
const estados = ['Pendiente', 'Retrasado', 'In pago', 'Finalizado']

const statuses = estados.map(status => ({
  state : status,
  createdAt : new Date()
}))

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Statuses', statuses, {});
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Statuses', null, {});
     
  }
};

