const express = require('express');

const rutas = express.Router() 

const {dashboard} = require("../controladores/dashboard.controlador")

rutas.get("/dashboard", dashboard )


module.exports = rutas  