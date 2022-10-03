const actividadesctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

actividadesctl.mostrar = (req, res) => {

    res.render("actividades/agregar")
}

    actividadesctl.enviar = async(req,res) =>{
        const id = req.user.id_usuario
        const ids = req.params.id
        const{nombreActividad,descripcionActividad,fechaActividad,comentarioActividad} = req.body
        const nuevaActividad ={
            nombreActividad,
            descripcionActividad,
            fechaActividad,
            comentarioActividad,
            usuarioIdUsuario:id
        }
        await orm.actividades.create(nuevaActividad)
        
        req.flash("success","Exito al Guardar")
        res.redirect("/actividades/lista/"+id)
    }

    actividadesctl.listar = async (req,res)=>{
        const id = req.user.id_usuario
        const ids = req.params.id 
        const lista = await sql.query("Select * from actividades where usuarioIdUsuario =?",[id])
        
        res.render("actividades/listar",{lista})
    }

    actividadesctl.traer = async (req,res)=>{
        const id = req.user.id_usuario
        const ids = req.params.id 
        const lista = await sql.query("Select * from actividades where id_actividad =?",[ids])
    
        res.render("actividades/editar",{lista})
    }

    actividadesctl.actualizar = async(req,res) =>{
        const id = req.user.id_usuario
        const ids = req.params.id

        const{nombreActividad,descripcionActividad,fechaActividad,comentarioActividad} = req.body
        const nuevaActividad ={
            nombreActividad,
            descripcionActividad,
            fechaActividad,
            comentarioActividad
        }
        await orm.actividades.findOne({where:{id_actividad:ids}})
        .then(actualizar => {
            actualizar.update(nuevaActividad)
        })
        
        req.flash("success","Exito al Actualizar")
        res.redirect("/actividades/lista/"+id)
    }

    actividadesctl.eliminar = async(req, res) => {
        const id = req.user.id_usuario
        const ids = req.params.id
        await orm.actividades.destroy({ where: { id_actividad: ids}})
    
        req.flash("success","Exito al Eliminar")
        res.redirect("/actividades/lista/"+id)
    }

module.exports = actividadesctl