'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcion extends Model {
    /**
     * Asociaciones del modelo Funcion.
     * Una función pertenece a una película, una sala y una cartelera.
     * Una función tiene muchas entradas.
     */
    static associate(models) {
      Funcion.belongsTo(models.Pelicula, {
        foreignKey: 'id_pelicula',
        as: 'pelicula',
      });
      Funcion.belongsTo(models.Sala, {
        foreignKey: 'id_sala',
        as: 'sala',
      });
      Funcion.belongsTo(models.Cartelera, {
        foreignKey: 'id_cartelera',
        as: 'cartelera',
      });
      Funcion.hasMany(models.Entrada, {
        foreignKey: 'id_funcion',
        as: 'entradas',
      });
    }
  }

  Funcion.init(
    {
      id_funcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_pelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pelicula',
          key: 'id_pelicula',
        },
      },
      id_sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sala',
          key: 'id_sala',
        },
      },
      id_cartelera: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cartelera',
          key: 'id_cartelera',
        },
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: { msg: 'La fecha debe ser una fecha válida.' },
        },
      },
      hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      hora_fin: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: { msg: 'El precio debe ser un número decimal válido.' },
          min: { args: [0], msg: 'El precio no puede ser negativo.' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Funcion',
      tableName: 'funcion',
      timestamps: true,
      underscored: true,
      validate: {
        horaFinDespuesDeHoraInicio() {
          if (this.hora_fin && this.hora_inicio && this.hora_fin <= this.hora_inicio) {
            throw new Error('La hora de fin debe ser posterior a la hora de inicio.');
          }
        },
      },
    }
  );

  return Funcion;
};
