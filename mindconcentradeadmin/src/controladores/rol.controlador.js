const rolctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

rolctl.mostrar= async(req,res)  =>{
   
    res.render("rol/agregar")
}

rolctl.enviar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreRol,descripcionRol} = req.body
    const nuevoRol ={
        nombreRol,
        descripcionRol,
        usuarioIdUsuario:id
    }
    await orm.rol.create(nuevoRol)
    
    req.flash("success","Exito al Guardar")
    res.redirect("/rol/lista/"+id)
}

rolctl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from rols where usuarioIdUsuario =?",[id])
    
    res.render("rol/listar",{lista})
}

rolctl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from rols where id_rol =?",[ids])

    res.render("rol/editar",{lista})
}

rolctl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreRol,descripcionRol} = req.body
    const nuevoRol ={
        nombreRol,
        descripcionRol,

    }
    await orm.rol.findOne({where:{id_rol:ids}})
    .then(actualizar => {
        actualizar.update(nuevoRol)
    })
    
    req.flash("success","Exito al Actualizar")
    res.redirect("/rol/lista/"+id)
}

rolctl.eliminar = async(req, res) => {
    const id = req.user.id_usuario
    const ids = req.params.id
    await orm.rol.destroy({where:{id_rol:ids}})

    req.flash("success","Exito al Eliminar")
    res.redirect("/rol/lista/"+id)
}

module.exports=rolctl
