const express = require('express');

const rutas = express.Router() 

const { permiso} = require("../controladores/permiso.controlador")

rutas.get("/permiso", permiso )


module.exports = rutas  

