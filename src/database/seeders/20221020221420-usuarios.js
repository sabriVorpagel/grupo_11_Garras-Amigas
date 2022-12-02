'use strict';
const {hashSync} = require('bcryptjs')

const users = [
  {
    name: 'Garras',
    surname: 'Amigas',
    email: 'garrasamigas@gmail.com',
    password: hashSync('123123',10),
    street: "",
    province: "Buenos Aires",
    city: "San Miguel",
    phone: 123456789,
    height: 290,
    avatar:"",
    rolId: 1,
    createdAt: new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
