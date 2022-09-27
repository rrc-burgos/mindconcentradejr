const consejoctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

consejoctl.mostrar= async(req,res) =>{
    const idMax = await sql.query("SELECT max(id_consejo) FROM consejos ")
    res.render("consejo/agregar",{idMax})
}

consejoctl.enviar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{numeroConsejo,descripcionConsejos} = req.body
    const  nuevoConsejo ={
        numeroConsejo,
        descripcionConsejos,
        usuarioIdUsuario:id
    }
    await orm.consejo.create(nuevoConsejo)
  
    req.flash("success","Exito al Guardar")
    res.redirect("/consejo/lista/"+id)
}

consejoctl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from consejos where usuarioIdUsuario =?",[id])
    // const detalleLista = await sql.query("select * from detalleConsejos where consejoIdConsejo =?", [ids])
    res.render("consejo/listar",{lista})
}

consejoctl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from consejos where id_consejo =?",[ids])
    //const detalleLista = await sql.query("select * from detalleConsejos where consejoIdConsejo =?", [ids])
    res.render("consejo/editar",{lista})
}

consejoctl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{numeroConsejo,descripcionConsejos} = req.body
    const nuevoConsejo ={
        numeroConsejo,
        descripcionConsejos
    }
    await orm.consejo.findOne({where:{id_consejo:ids}})
    .then(actualizar => {
        actualizar.update(nuevoConsejo)
    })
    req.flash("success","Exito al Actualizar")
    res.redirect("/consejo/lista/"+id)
}

consejoctl.eliminar = async(req, res) => {
    const id = req.user.id_usuario
    const ids = req.params.id
    await orm.consejo.destroy({where:{id_consejo:ids}})

    req.flash("success","Exito al Eliminar")
    res.redirect("/consejo/lista/"+id)
}

module.exports=consejoctl
