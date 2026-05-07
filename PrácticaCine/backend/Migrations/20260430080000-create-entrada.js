'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entrada', {
      id_entrada: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_funcion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'funcion',
          key: 'id_funcion',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_asiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'asiento',
          key: 'id_asiento',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      estado: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'Disponible',
        comment: 'Disponible, Vendida, Reservada, Cancelada',
      },
      precio_final: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
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
    await queryInterface.dropTable('entrada');
  },
};
