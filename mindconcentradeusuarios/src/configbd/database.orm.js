const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "mindconcentrade";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})

const usuarioModelos = require ("../modelos/usuario")
const clienteModelos = require ("../modelos/cliente")
const opinionModelos = require ("../modelos/opinion")
const consejoModelos = require ("../modelos/consejo")
const detalleConsejoModelos = require ("../modelos/detalleConsejo")
const actividadesModelos = require ("../modelos/actividades")
const agendaModelos = require ("../modelos/agenda")
const proyectoModelos = require ("../modelos/proyecto")
const detalleProyectoModelo = require ("../modelos/detalleProyecto");




const sequelize = new Sequelize(
  'mindconcentrade',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

const usuario = usuarioModelos(sequelize, Sequelize)
const cliente = clienteModelos(sequelize, Sequelize)
const opinion  = opinionModelos(sequelize, Sequelize)
const consejo = consejoModelos(sequelize, Sequelize)
const detalleConsejo = detalleConsejoModelos(sequelize, Sequelize)
const actividades = actividadesModelos(sequelize, Sequelize)
const agenda = agendaModelos(sequelize, Sequelize)
const proyecto = proyectoModelos(sequelize, Sequelize)
const detalleProyecto = detalleProyectoModelo(sequelize, Sequelize)

usuario.hasMany(actividades)
actividades.belongsTo(usuario)

usuario.hasMany(proyecto)
proyecto.belongsTo(usuario)

proyecto.hasMany(detalleProyecto)
detalleProyecto.belongsTo(proyecto)

usuario.hasMany(agenda)
agenda.belongsTo(usuario)

cliente.hasMany(opinion)
opinion.belongsTo(cliente)

cliente.hasMany(consejo)
consejo.belongsTo(cliente)

consejo.hasMany(detalleConsejo)
detalleConsejo.belongsTo(consejo)



module.exports = {
  usuario,
  cliente,
  opinion,
  consejo,
  detalleConsejo,
  actividades,
  agenda,
  proyecto,
  detalleProyecto
}
