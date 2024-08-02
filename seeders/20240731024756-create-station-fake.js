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

    await queryInterface.bulkInsert('stations', [
      {
        name: 'Ben Xe Da Nang',
        address: 'Lien Chieu - Da Nang',
        province: 'DN',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
      {
        name: 'Ben Xe Phia Nam',
        address: 'An Cu TP. Hue',
        province: 'DN',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
      {
        name: 'Ben Xe Phia Bac',
        address: 'Huong Tra - Hue',
        province: 'DN',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
      {
        name: 'Ben Xe Duc Long',
        address: 'Huong Tra - Hue',
        province: 'DN',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
      {
        name: 'Ben Xe Mien Dong',
        address: 'Saigon',
        province: 'HCM',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
      {
        name: 'Ben Xe An Suong',
        address: 'Tan Binh Q12',
        province: 'HCM',
        updatedAt: '2024-07-31 10:00:15',
        createdAt: '2024-07-31 10:00:15',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  },
};
