const apipreguntasctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



apipreguntasctl.apipreguntas = (req, res) => {

    res.render("pregunta/apipreguntas")

}

module.exports = apipreguntasctl 