const permisoctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



permisoctl.permiso = (req, res) => {

    res.render("permiso/permiso")

}

module.exports = permisoctl
