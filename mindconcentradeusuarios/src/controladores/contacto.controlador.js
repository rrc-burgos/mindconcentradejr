const contactoctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



contactoctl.contacto = (req, res) => {

    res.render("contacto/contacto")

}

module.exports = contactoctl