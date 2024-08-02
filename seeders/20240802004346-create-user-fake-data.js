'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Ho',
          email: 'johnho@gmail.com',
          password: '123456',
          numberPhone: '0987654321',
          type: 'admin',
          avatar: 'https://images.dog.ceo/breeds/beagle/n02088364_9318.jpg',
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
        {
          name: 'David Ho',
          email: 'davidho@gmail.com',
          password: '123456',
          numberPhone: '0987654321',
          type: 'admin',
          avatar: 'https://images.dog.ceo/breeds/cockapoo/big-eye-ginger.jpg',
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
