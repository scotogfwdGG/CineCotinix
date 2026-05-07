'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Asociaciones del modelo Pelicula.
     * Una película tiene muchas funciones.
     */
    static associate(models) {
      Pelicula.hasMany(models.Funcion, {
        foreignKey: 'id_pelicula',
        as: 'funciones',
      });
    }
  }

  Pelicula.init(
    {
      id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'El título de la película no puede estar vacío.' },
        },
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Duración en minutos',
        validate: {
          isInt: { msg: 'La duración debe ser un número entero.' },
          min: { args: [1], msg: 'La duración debe ser al menos 1 minuto.' },
        },
      },
      genero: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'El género no puede estar vacío.' },
        },
      },
      clasificacion_edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Edad mínima permitida (0 = todo público)',
        validate: {
          isInt: { msg: 'La clasificación de edad debe ser un número entero.' },
          min: { args: [0], msg: 'La clasificación de edad no puede ser negativa.' },
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fecha_estreno: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          isDate: { msg: 'La fecha de estreno debe ser una fecha válida.' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Pelicula',
      tableName: 'pelicula',
      timestamps: true,
      underscored: true,
    }
  );

  return Pelicula;
};
