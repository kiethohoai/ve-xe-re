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
      'trips',
      [
        {
          fromStation: null,
          toStation: null,
          startTime: '2024-08-02 08:00:00',
          price: 400000,
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
        {
          fromStation: null,
          toStation: null,
          startTime: '2024-08-02 08:00:00',
          price: 500000,
          createdAt: '2024-08-01 08:00:00',
          updatedAt: '2024-08-01 08:00:00',
        },
        {
          fromStation: null,
          toStation: null,
          startTime: '2024-08-02 08:00:00',
          price: 600000,
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
    await queryInterface.bulkDelete('trips', null, {});
  },
};
