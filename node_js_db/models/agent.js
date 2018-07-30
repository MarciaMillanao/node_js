import { hostname } from 'os';

'user strict' //esto siempre lo utilizamos para evitar errores
//importamos nuestro objeto Sequelize
const Sequelize = require('sequelize') 
// también exportaremos nuestra función setupDatabase, y me fijo en la ruta a seguir
const setupDatabase = require('../lib/db')
//y por último exportaremos la función setupAgentModel, que va a recibir el objeto de configuración
module.exports = function setupAgentModel (config) {
  //recibir la configuración acá, nos permite obtener una instancia de la base de datos, utilizando la funcion que acabamos de crear
  const sequelize = setupDatabase(config)
  // estas serán las configuraciones de agent
  return sequelize.define('agent', {
    unid: {
      type : Sequelize.STRING,
      allowNull: false //esto permite validar que no sean datos nulos
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pid:{
      type: Sequelize.INTERGER,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

}