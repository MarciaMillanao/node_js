'user strict' //esto siempre lo utilizamos para evitar errores
//importamos nuestro objeto Sequelize
const Sequelize = require('sequelize') 
// también exportaremos nuestra función setupDatabase, y me fijo en la ruta a seguir
const setupDatabase = require('../lib/db')
//y por último exportaremos la función setupAgentModel, que va a recibir el objeto de configuración
module.exports = function setupMetricModel (config) {
  //recibir la configuración acá, nos permite obtener una instancia de la base de datos, utilizando la funcion que acabamos de crear
  const sequelize = setupDatabase(config)
  // estas serán las configuraciones de agent
  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })

}