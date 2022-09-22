const preguntactl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

preguntactl.mostrar= async(req,res) =>{
    const idMax = await sql.query("SELECT max(id_pregunta) FROM pregunta ")
    res.render("pregunta/agregar",{idMax})
}

preguntactl.enviar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{numeroPregunta,pregunta,observacion,estado} = req.body
    const  nuevoPregunta ={
        numeroPregunta,
        pregunta,
        observacion,
        estado,
        usuarioIdUsuario:id
    }
    await orm.pregunta.create(nuevoPregunta)
  
    req.flash("success","Exito al Guardar")
    res.redirect("/pregunta/lista/"+id)
}

preguntactl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from pregunta where usuarioIdUsuario =?",[id])
    const detalleLista = await sql.query("select * from detallePregunta where preguntumIdPregunta =?", [ids])
    res.render("pregunta/listar",{lista,detalleLista})
}

preguntactl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from pregunta where id_pregunta =?",[ids])
    const detalleLista = await sql.query("select * from detallePregunta where preguntumIdPregunta =?", [ids])
    res.render("pregunta/editar",{lista,detalleLista})
}

preguntactl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{numeroPregunta,pregunta, observacion, estado} = req.body
    const nuevoPregunta ={
        numeroPregunta,
        pregunta,
        observacion,
        estado,
    }
    await orm.pregunta.findOne({where:{id_pregunta:ids}})
    .then(actualizar => {
        actualizar.update(nuevoPregunta)
    })
    req.flash("success","Exito al Actualizar")
    res.redirect("/pregunta/lista/"+id)
}

preguntactl.eliminar = async(req, res) => {
    const id = req.user.id_usuario
    const ids = req.params.id
    await orm.agenda.destroy({where:{id_pregunta:ids}})

    req.flash("success","Exito al Eliminar")
    res.redirect("/pregunta/lista/"+id)
}


preguntactl.cerrarSesion = (req, res, next) => {

    req.logOut()
    res.redirect("/")
}

module.exports=preguntactl