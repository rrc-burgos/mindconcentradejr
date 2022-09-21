const categoriactl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

categoriactl.mostrar= async(req,res)  =>{
    const idMax = await sql.query("SELECT max(id_categoria) FROM categoria ")
    res.render("categoria/agregar",{idMax})
}

categoriactl.enviar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreCategoria,descripcionCategoria} = req.body
    const nuevaCategoria ={
        nombreCategoria,
        descripcionCategoria,
        usuarioIdUsuario:id
    }
    await orm.categoria.create(nuevaCategoria)
    
    req.flash("success","Exito al Guardar")
    res.redirect("/categoria/lista/"+id)
}

categoriactl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from categoria where usuarioIdUsuario =?",[id])
    const detalleLista = await sql.query("select * from detalleCategoria where categoriumIdCategoria =?", [ids])
    res.render("categoria/listar",{lista,detalleLista})
}

categoriactl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from categoria where id_categoria =?",[ids])
    const detalleLista = await sql.query("select * from detalleCategoria where categoriumIdCategoria =?", [ids])
    res.render("categoria/editar",{lista,detalleLista})
}

categoriactl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreCategoria,descripcionCategoria} = req.body
    const nuevaCategoria ={
        nombreCategoria,
        descripcionCategoria,
    }
    await orm.categoria.findOne({where:{id_categoria:ids}})
    .then(actualizar => {
        actualizar.update(nuevaCategoria)
    })
    req.flash("success","Exito al Actualizar")
    res.redirect("/categoria/lista/"+id)
}

categoriactl.cerrarSesion = (req, res, next) => {

    req.logOut()
    res.redirect("/")
}

module.exports=categoriactl
