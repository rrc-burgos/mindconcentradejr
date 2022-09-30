const express = require('express');

const rutas = express.Router() 

const {vida} = require("../controladores/vida.controlador")

rutas.get("/vida", vida )


module.exports = rutas  