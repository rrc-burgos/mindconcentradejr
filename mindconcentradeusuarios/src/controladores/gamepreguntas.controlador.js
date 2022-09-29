const gamepreguntasctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



gamepreguntasctl.gamepreguntas = (req, res) => {

    res.render("pregunta/gamepreguntas")

}

module.exports = gamepreguntasctl
