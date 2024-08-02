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
      'tickets',
      [
        {
          trip_id: 16,
          user_id: 7,
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
        {
          trip_id: 17,
          user_id: 8,
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
        {
          trip_id: 18,
          user_id: 7,
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
    await queryInterface.bulkDelete('tickets', null, {});
  },
};
