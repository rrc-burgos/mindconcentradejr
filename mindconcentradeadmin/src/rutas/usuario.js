const express = require('express');

const rutas = express.Router() 

const {mostrar,actualizar,listar,traer} = require("../controladores/usuario.controlador")

rutas.get("/listar/:id", mostrar )
rutas.get("/editar/:id", traer )
rutas.post("/editar/:id",actualizar)

module.exports = rutas  
