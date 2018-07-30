'use strict' // esto es para evitar error
//lo primero que haremos será requerir las funciones que acabamos de definir
const setupDatabase = require('./lib/db')// ruta donde está mi función
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

// acá exportare mi modulo
module.exports = async function (config) { // recibe como parametro una configuracíon que aun no sabe lo que es
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Acá definiremos la relación AgentModel y MetricModel, utilizando los modelos de sequelize
  // Estás funciones hasMany y belongsTo son de siquelize y lo que harán es que a la hora de crear nuestra base de datos, el va a crear relación entre estas dos
  AgentModel.hasMany(MetricModel)// Acá le digo a a AgentModel tienen muchas MetricModel
  MetricModel.belongsTo(AgentModel)// Acá de MetricModel pertenece a AgentModel

  // Por último validaremos que la base de datos este bien configurada
  // await lo puedo utilizar porque estoy con async, y al declararla antes estoy haciendo lo mismo que una promesa, con eso se ejecutará, si llegara a tener un error acá no se seguirá ejecutando el resto de mi función
  await sequelize.authenticate()

  // acá configuraremos la base de datos
  //sequelize.sync()// toda la definicion de los modelos que hayan en la aplicación si no existen en la base de datos  si no existe el dato sequelize.sync los creará

  const Agent = {} // declaro mis array vacios
  const Metric = {}

  return { // retorno de esta forma como un objeto, que es la forma de ec6
    Agent,
    Metric
  }
}
