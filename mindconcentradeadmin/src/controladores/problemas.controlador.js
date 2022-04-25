const problemasctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



problemasctl.problemas = (req, res) => {

    res.render("informacion/problemas")

}

module.exports = problemasctl