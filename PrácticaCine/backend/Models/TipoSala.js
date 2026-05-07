'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoSala extends Model {
    /**
     * Asociaciones del modelo TipoSala.
     * Un tipo de sala se aplica a muchas salas.
     */
    static associate(models) {
      TipoSala.hasMany(models.Sala, {
        foreignKey: 'id_tipo_sala',
        as: 'salas',
      });
    }
  }

  TipoSala.init(
    {
      id_tipo_sala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: 'El nombre del tipo de sala no puede estar vacío.' },
        },
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'TipoSala',
      tableName: 'tipo_sala',
      timestamps: true,
      underscored: true,
    }
  );

  return TipoSala;
};