const express = require('express');

const rutas = express.Router() 

const {actividades} = require("../controladores/actividades.controlador")

rutas.get("/actividades", actividades )


module.exports = rutas  
