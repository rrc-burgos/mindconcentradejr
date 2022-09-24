const express = require('express');
const rutas = express.Router()

const { mostrar, enviar, listar, traer, actualizar, eliminar } = require('../controladores/pregunta.controlador');

const { isLoggedIn } = require("../lib/auth")

rutas.get("/agregar/",isLoggedIn,mostrar)
rutas.post("/agregar/",isLoggedIn,enviar)
rutas.get("/lista/:id",isLoggedIn,listar)
rutas.get("/editar/:id",isLoggedIn,traer)
rutas.post("/editar/:id",isLoggedIn,actualizar)
rutas.post("/eliminar/:id",isLoggedIn,eliminar)



module.exports=rutas