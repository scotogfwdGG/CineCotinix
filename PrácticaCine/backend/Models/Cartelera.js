'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cartelera extends Model {
    /**
     * Asociaciones del modelo Cartelera.
     * Una cartelera pertenece a un cine y tiene muchas funciones.
     */
    static associate(models) {
      Cartelera.belongsTo(models.Cine, {
        foreignKey: 'id_cine',
        as: 'cine',
      });
      Cartelera.hasMany(models.Funcion, {
        foreignKey: 'id_cartelera',
        as: 'funciones',
      });
    }
  }

  Cartelera.init(
    {
      id_cartelera: {
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
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: { msg: 'La fecha de inicio debe ser una fecha válida.' },
        },
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: { msg: 'La fecha de fin debe ser una fecha válida.' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Cartelera',
      tableName: 'cartelera',
      timestamps: true,
      underscored: true,
      validate: {
        fechaFinDespuesDeFechaInicio() {
          if (this.fecha_fin && this.fecha_inicio && this.fecha_fin < this.fecha_inicio) {
            throw new Error('La fecha de fin debe ser posterior a la fecha de inicio.');
          }
        },
      },
    }
  );

  return Cartelera;
};
