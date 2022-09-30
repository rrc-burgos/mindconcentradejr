const express = require('express');

const rutas = express.Router() 

const {nosotros} = require("../controladores/nosotros.controlador")

rutas.get("/nosotros", nosotros )


module.exports = rutas  

