const express = require('express');

const rutas = express.Router() 

const {apipreguntas} = require("../controladores/apipreguntas.controlador")

rutas.get("/apipreguntas", apipreguntas )


module.exports = rutas  

