const express = require('express');

const rutas = express.Router() 

const { problemas} = require("../controladores/problemas.controlador")

rutas.get("/problemas", problemas )


module.exports = rutas  

