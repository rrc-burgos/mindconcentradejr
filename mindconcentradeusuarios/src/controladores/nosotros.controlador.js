const nosotrosctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



nosotrosctl.nosotros = (req, res) => {

    res.render("informacion/nosotros")

}

module.exports = nosotrosctl