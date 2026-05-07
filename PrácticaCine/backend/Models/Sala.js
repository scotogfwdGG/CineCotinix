'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    /**
     * Asociaciones del modelo Sala.
     * Una sala pertenece a un cine y a un tipo de sala.
     * Una sala tiene muchos asientos y muchas funciones.
     */
    static associate(models) {
      Sala.belongsTo(models.Cine, {
        foreignKey: 'id_cine',
        as: 'cine',
      });
      Sala.belongsTo(models.TipoSala, {
        foreignKey: 'id_tipo_sala',
        as: 'tipoSala',
      });
      Sala.hasMany(models.Asiento, {
        foreignKey: 'id_sala',
        as: 'asientos',
      });
      Sala.hasMany(models.Funcion, {
        foreignKey: 'id_sala',
        as: 'funciones',
      });
    }
  }

  Sala.init(
    {
      id_sala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_cine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cine',
          key: 'id_cine',
        },
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'El nombre de la sala no puede estar vacío.' },
        },
      },
      capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'La capacidad debe ser un número entero.' },
          min: { args: [1], msg: 'La capacidad debe ser al menos 1.' },
        },
      },
      id_tipo_sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_sala',
          key: 'id_tipo_sala',
        },
      },
    },
    {
      sequelize,
      modelName: 'Sala',
      tableName: 'sala',
      timestamps: true,
      underscored: true,
    }
  );

  return Sala;
};
