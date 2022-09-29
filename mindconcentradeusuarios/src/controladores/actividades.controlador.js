const actividadesctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



actividadesctl.actividades = (req, res) => {

    res.render("informacion/actividades")

}

module.exports = actividadesctl