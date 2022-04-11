const passport = require("passport")

const registroctl = {}

registroctl.mostrar = (req, res) => {

    res.render("usuario/registro")

}

registroctl.registrar = passport.authenticate("local.signup", {
    successRedirect: "/cerrar",
    failureRedirect: "/registro",
    failureFlash : true
}) 


registroctl.mostrarlogin = (req, res) => {

    res.render("usuario/login")

}

registroctl.login  = passport.authenticate("local.signin", {
    successRedirect: "/proyecto/agregar/",
    failureRedirect: "/ ",
    failureFlash : true
})  


registroctl.cerrarSesion = (req, res, next) => {

    req.logOut()
    res.redirect("/")
}


module.exports = registroctl
