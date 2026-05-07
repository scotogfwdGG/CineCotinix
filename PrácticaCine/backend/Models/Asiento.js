'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Asiento extends Model {
    /**
     * Asociaciones del modelo Asiento.
     * Un asiento pertenece a una sala.
     * Un asiento tiene muchas entradas.
     */
    static associate(models) {
      Asiento.belongsTo(models.Sala, {
        foreignKey: 'id_sala',
        as: 'sala',
      });
      Asiento.hasMany(models.Entrada, {
        foreignKey: 'id_asiento',
        as: 'entradas',
      });
    }
  }

  Asiento.init(
    {
      id_asiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sala',
          key: 'id_sala',
        },
      },
      fila: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'La fila no puede estar vacía.' },
        },
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'El número de asiento debe ser un entero.' },
          min: { args: [1], msg: 'El número de asiento debe ser al menos 1.' },
        },
      },
      tipo: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'Estándar',
        comment: 'Estándar, VIP, Preferencial',
        validate: {
          isIn: {
            args: [['Estándar', 'VIP', 'Preferencial']],
            msg: 'El tipo de asiento debe ser: Estándar, VIP o Preferencial.',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Asiento',
      tableName: 'asiento',
      timestamps: true,
      underscored: true,
    }
  );

  return Asiento;
};
