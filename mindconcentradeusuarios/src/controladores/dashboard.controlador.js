const dashboardctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")



dashboardctl.dashboard = (req, res) => {

    res.render("informacion/dashboard")

}

module.exports = dashboardctl