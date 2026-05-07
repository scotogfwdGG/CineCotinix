'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('asiento', {
      id_asiento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_sala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sala',
          key: 'id_sala',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fila: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: 'Estándar',
        comment: 'Estándar, VIP, Preferencial',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('asiento');
  },
};
