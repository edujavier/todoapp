// instancia para la conexion de base de datos db
const db = require('../utils/database');
//Tipos de datos de sequelize varchar (SQL) -> STRING
const {DataTypes} = require('sequelize');

//definir el modelo de usuarios
//los modelos se definen con una Mayuscula

//parametros
//creacion de tablas
//nombre de la tabla
//los atributos de las tablas 
const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true,//valida si es un correo 
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;