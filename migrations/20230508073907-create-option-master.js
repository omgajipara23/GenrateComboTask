'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OptionMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      selectId: {
        type: Sequelize.INTEGER
      },
      optionname: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('OptionMasters', {
      references: {
        field: 'id',
        table: 'SelectMasters'
      },
      type: 'foreign key',
      fields: ['selectId']
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OptionMasters');
  }
};