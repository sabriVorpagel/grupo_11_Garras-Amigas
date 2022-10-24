'use strict';
const {hashSync} = require('bcryptjs')

const users = [
  {
    name: 'Garras',
    surname: 'Amigas',
    email: 'garrasamigas@gmail.com',
    password: hashSync('123123',10),
    birthday: null,
    rolId: 1,
    createdAt: new Date()
  },
  {
    name: 'User',
    surname: 'User',
    email: 'user@gmail.com',
    password: hashSync('123123',10),
    birthday: null,
    rolId: 2,
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
