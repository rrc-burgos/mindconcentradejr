const vidactl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



vidactl.vida = (req, res) => {

    res.render("informacion/vida")

}

module.exports = vidactl