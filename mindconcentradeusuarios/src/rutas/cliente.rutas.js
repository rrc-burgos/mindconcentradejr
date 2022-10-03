const express = require('express');
const rutas = express.Router()

const { mostrar, enviar, listar, traer, actualizar ,eliminar} = require('../controladores/cliente.controlador');

const { isLoggedIn } = require("../lib/auth")

rutas.get("/agregar/",isLoggedIn,mostrar)
rutas.post("/agregar/:id",isLoggedIn,enviar)
rutas.get("/lista/:id",isLoggedIn,listar)
rutas.get("/editar/:id",isLoggedIn,traer)
rutas.post("/editar/:id",isLoggedIn,actualizar)
rutas.get("/eliminar/:id",isLoggedIn,eliminar)

module.exports=rutas