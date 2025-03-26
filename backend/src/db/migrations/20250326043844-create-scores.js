'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scores', {
      number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      math: {
        type: Sequelize.FLOAT
      },
      literature: {
        type: Sequelize.FLOAT
      },
      foreignLanguage: {
        type: Sequelize.FLOAT
      },
      physics: {
        type: Sequelize.FLOAT
      },
      chemistry: {
        type: Sequelize.FLOAT
      },
      biology: {
        type: Sequelize.FLOAT
      },
      history: {
        type: Sequelize.FLOAT
      },
      geography: {
        type: Sequelize.FLOAT
      },
      civicEducation: {
        type: Sequelize.FLOAT
      },
      foreignLanguageId: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('scores');
  }
};