'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Asociaciones del modelo Entrada.
     * Una entrada pertenece a una función y a un asiento.
     */
    static associate(models) {
      Entrada.belongsTo(models.Funcion, {
        foreignKey: 'id_funcion',
        as: 'funcion',
      });
      Entrada.belongsTo(models.Asiento, {
        foreignKey: 'id_asiento',
        as: 'asiento',
      });
    }
  }

  Entrada.init(
    {
      id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_funcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'funcion',
          key: 'id_funcion',
        },
      },
      id_asiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'asiento',
          key: 'id_asiento',
        },
      },
      estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'Disponible',
        comment: 'Disponible, Vendida, Reservada, Cancelada',
        validate: {
          isIn: {
            args: [['Disponible', 'Vendida', 'Reservada', 'Cancelada']],
            msg: 'El estado debe ser: Disponible, Vendida, Reservada o Cancelada.',
          },
        },
      },
      precio_final: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: { msg: 'El precio final debe ser un número decimal válido.' },
          min: { args: [0], msg: 'El precio final no puede ser negativo.' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Entrada',
      tableName: 'entrada',
      timestamps: true,
      underscored: true,
    }
  );

  return Entrada;
};
