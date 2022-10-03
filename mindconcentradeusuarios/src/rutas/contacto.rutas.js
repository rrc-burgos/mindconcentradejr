const express = require('express');

const rutas = express.Router() 

const {contacto} = require("../controladores/contacto.controlador")

rutas.get("/contacto", contacto )


module.exports = rutas  
