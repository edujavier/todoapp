const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');
//const Todos = require=("../models/")

//arreglos para insertar informaciion
const users = [
  {username:'Iannacus',email:'ian@gmail.com', password:1234,}, //id:1
  {username:'Jhorman',email:'jhorman@gmail.com', password:1234,},//id:2
  {username:'Lucero',email:'lucero@gmail.com', password:1234,},//id:3
];

const todos = [
  {title: 'Tarea1', description: 'shala shalala 1', userId: 1},
  {title: 'Tarea2', description: 'shala shalala 2', userId: 1},
  {title: 'Tarea imposible', userId: 2},
];

//const categories = [];

//const TodosCategories = [];

//tiene metodo create
//metodo findOne, findAll, findByPk(find primary key)
//update
//destroy
db.sync({force: true})
.then(() =>{
  console.log("Iniciando con el sembradio malicioso")
  users.forEach((user) => Users.create(user)); 
  setTimeout(() => {
    todos.forEach((todo)=> Todos.create(todo)); //todos.models
  }, 100)//100milisegundos
})
.catch((error) => console.log(error));