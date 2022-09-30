const express = require('express');

const rutas = express.Router() 

const {gamepreguntas} = require("../controladores/gamepreguntas.controlador")

rutas.get("/gamepreguntas", gamepreguntas )


module.exports = rutas  

