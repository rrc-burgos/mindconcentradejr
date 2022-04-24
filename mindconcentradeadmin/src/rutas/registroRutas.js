const express = require('express');

const rutas = express.Router() 

const { mostrar, registrar, mostrarlogin, login, cerrarSesion } = require("../controladores/registroControlador")

rutas.get("/registro", mostrar )

rutas.post("/registro",registrar)

rutas.get("/login",mostrarlogin  )

rutas.post("/login", login)

rutas.get("/cerrar", cerrarSesion)  

module.exports = rutas
