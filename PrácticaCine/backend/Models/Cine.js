'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cine extends Model {
    /**
     * Asociaciones del modelo Cine.
     * Un cine tiene muchas salas y muchas carteleras.
     */
    static associate(models) {
      Cine.hasMany(models.Sala, {
        foreignKey: 'id_cine',
        as: 'salas',
      });
      Cine.hasMany(models.Cartelera, {
        foreignKey: 'id_cine',
        as: 'carteleras',
      });
    }
  }

  Cine.init(
    {
      id_cine: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'El nombre del cine no puede estar vacío.' },
        },
      },
      direccion: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'La dirección no puede estar vacía.' },
        },
      },
      ciudad: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'La ciudad no puede estar vacía.' },
        },
      },
      pais: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'El país no puede estar vacío.' },
        },
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Cine',
      tableName: 'cine',
      timestamps: true,
      underscored: true,
    }
  );

  return Cine;
};
