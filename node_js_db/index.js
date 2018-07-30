'use strict' // esto es para evitar error

// acá exportare mi modulo
module.exports = async function (config) { // recibe como parametro una configuracíon que aun no sabe lo que es
  const Agent = {} // declaro mis array vacios
  const Metric = {}

  return { // retorno de esta forma como un objeto, que es la forma de ec6
    Agent,
    Metric
  }
}
