const usuarioctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

usuarioctl.mostrar= async(req,res)  =>{
    const id = req.user.id_usuario;
    const usuarios = await sql.query(
            "select * from usuarios where id_usuarios = ?",
            [id]
        );
    
    res.render("usuario/listar",{usuarios})
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
    const lista = await sql.query("Select * from usuarios where id_usuario =?",[id])
    res.render("usuario/editar",{lista})
}

usuarioctl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
const{nombre,apellido,cedula,direccion,telefono,correo,cargo,foto} = req.body
    const actualizarUsuario ={
        nombre,
        apellido,
        cedula,
        direccion,
        telefono,
        correo,
        cargo,
        foto
    }

    await sql.query("update usuarios set ? where id_usuario =?",actualizarUsuario,id)
    req.flash("success","Exito al Actualizar")
    res.redirect("/usuario/lista/"+id)
}

module.exports=usuarioctl
