const express = require('express');
const rutas = express.Router()

const { mostrar, enviar, listar, traer, actualizar } = require('../controladores/usuario.controlador');

const { isLoggedIn } = require("../lib/auth")

rutas.get("/agregar/",isLoggedIn,mostrar)
// rutas.post("/agregar/",isLoggedIn,enviar)
rutas.get("/listar/:id",isLoggedIn,listar)
rutas.get("/editar/:id",isLoggedIn,traer)
rutas.post("/editar/:id",isLoggedIn,actualizar)

module.exports=rutas