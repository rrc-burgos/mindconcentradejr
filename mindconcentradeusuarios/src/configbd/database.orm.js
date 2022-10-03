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
const opinionModelos = require ("../modelos/opinion")
const consejoModelos = require ("../modelos/consejo")
const detalleConsejoModelos = require ("../modelos/detalleConsejo")
const agendaModelos = require ("../modelos/agenda")
const proyectoModelos = require ("../modelos/proyecto")
const detalleProyectoModelo = require ("../modelos/detalleProyecto");
const preguntaModelos = require ("../modelos/pregunta")
const detallePreguntaModelos = require ("../modelos/detallePregunta")
const rolModelos = require ("../modelos/rol")
const permisoModelos = require ("../modelos/permiso")
const categoriaModelos = require ("../modelos/categoria")
const detalleCategoriaModelo = require ("../modelos/detalleCategoria");
const clienteModelos = require ("../modelos/cliente")
const actividadesModelos = require ("../modelos/actividades")



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
const opinion  = opinionModelos(sequelize, Sequelize)
const consejo = consejoModelos(sequelize, Sequelize)
const detalleConsejo = detalleConsejoModelos(sequelize, Sequelize)
const agenda = agendaModelos(sequelize, Sequelize)
const proyecto = proyectoModelos(sequelize, Sequelize)
const detalleProyecto = detalleProyectoModelo(sequelize, Sequelize)
const pregunta = preguntaModelos(sequelize, Sequelize)
const detallePregunta = detallePreguntaModelos(sequelize, Sequelize)
const rol = rolModelos(sequelize, Sequelize)
const permiso = permisoModelos(sequelize, Sequelize)
const categoria = categoriaModelos(sequelize, Sequelize)
const detalleCategoria = detalleCategoriaModelo(sequelize, Sequelize)
const cliente = clienteModelos(sequelize, Sequelize)
const actividades = actividadesModelos(sequelize, Sequelize)


usuario.hasMany(actividades)
actividades.belongsTo(usuario)

usuario.hasMany(proyecto)
proyecto.belongsTo(usuario)

proyecto.hasMany(detalleProyecto)
detalleProyecto.belongsTo(proyecto)

usuario.hasMany(agenda)
agenda.belongsTo(usuario)

usuario.hasMany(rol)
rol.belongsTo(usuario)

usuario.hasMany(permiso)
permiso.belongsTo(usuario)

cliente.hasMany(opinion)
opinion.belongsTo(cliente)

usuario.hasMany(consejo)
consejo.belongsTo(usuario)

consejo.hasMany(detalleConsejo)
detalleConsejo.belongsTo(consejo)

usuario.hasMany(pregunta)
pregunta.belongsTo(usuario)

pregunta.hasMany(detallePregunta)
detallePregunta.belongsTo(pregunta)

usuario.hasMany(categoria)
categoria.belongsTo(usuario)

categoria.hasMany(detalleCategoria)
detalleCategoria.belongsTo(categoria)




module.exports = {
  usuario,
  opinion,
  consejo,
  detalleConsejo,
  agenda,
  proyecto,
  detalleProyecto,
  pregunta,
  detallePregunta,  
  rol,
  permiso,
  proyecto,
  detalleProyecto,
  categoria,
  detalleCategoria,
  cliente,
  actividades
}
