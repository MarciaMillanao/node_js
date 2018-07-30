'use strict'

const Sequelize = require('sequelize')
let sequelize = null // esto configurará la base de datos, será  null por defecto, que luego lo inicializaremos cuando ejecutemos la funcion

//Acá exportaremos la función
module.exports = function setupDatabase (config) {
  //si sequelize es nulo o no existe la definimos 
  if (!sequelize) { // si no existe la instancia, la inicalizamos y la siguiente vez que ejecutemos el código ya va a existir por lo que retornaremos
    sequelize = new Sequelize(config)
  }
  return sequelize
}
