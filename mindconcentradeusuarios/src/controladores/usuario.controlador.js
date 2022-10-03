const usuarioctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

usuarioctl.mostrar= async(req,res)  =>{
const id = req.user.id_usuario
const lista = await sql.query("Select * from usuarios")
res.render("usuario/lista", {lista})
}


usuarioctl.listar = async (req,res)=>{
const id = req.user.id_usuario
const ids = req.params.id 
const lista = await sql.query("Select * from usuarios where id_usuario =?",[id])
res.render("usuario/listar",{lista})
}

usuarioctl.traer = async (req,res)=>{
const id = req.user.id_usuario
const ids = req.params.id 
const lista = await sql.query("Select * from usuarios where id_usuario =?",[ids])
res.render("usuario/editar",{lista})
}

usuarioctl.actualizar = async(req,res) =>{
const id = req.user.id_usuario
const ids = req.params.id
const{nombre,apellido,username, password, estado} = req.body
const nuevoUsuario ={
    nombre,
    apellido,
    username, 
    password, 
    estado
}
await orm.usuario.findOne({where:{id_usuario:ids}})
.then(actualizar => {
    actualizar.update(nuevoUsuario)
})

    await sql.query("update usuarios set ? where id_usuario =?",[nuevoUsuario, id])

req.flash("success","Exito al Actualizar")
res.redirect("/usuario/listar/"+id)
}


module.exports=usuarioctl