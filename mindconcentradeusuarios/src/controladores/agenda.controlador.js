const agendactl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

agendactl.mostrar= async(req,res)  =>{
   
    res.render("agenda/agregar")
}

    agendactl.enviar = async(req,res) =>{
        const id = req.user.id_usuario
        const ids = req.params.id
        const{nombreAgenda,descripcionAgenda, horaAgenda, fechaAgenda} = req.body
        const nuevaAgenda ={
            nombreAgenda,
            descripcionAgenda,
            horaAgenda,
            fechaAgenda,
            usuarioIdUsuario:id
        }
        await orm.agenda.create(nuevaAgenda)
        
        req.flash("success","Exito al Guardar")
        res.redirect("/agenda/lista/"+id)
    }

agendactl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from agendas where usuarioIdUsuario =?",[id])
    
    res.render("agenda/listar",{lista})
}

agendactl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from agendas where id_agenda =?",[ids])

    res.render("agenda/editar",{lista})
}

agendactl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreAgenda,descripcionAgenda, horaAgenda, fechaAgenda} = req.body
    const nuevaAgenda ={
        nombreAgenda,
        descripcionAgenda,
        horaAgenda,
        fechaAgenda
    }
    await orm.agenda.findOne({where:{id_agenda:ids}})
    .then(actualizar => {
        actualizar.update(nuevaAgenda)
    })
    
    req.flash("success","Exito al Actualizar")
    res.redirect("/agenda/lista/"+id)
}

agendactl.eliminar = async(req, res) => {
    const id = req.user.id_usuario
    const ids = req.params.id
    await orm.agenda.destroy({where:{id_agenda:ids}})

    req.flash("success","Exito al Eliminar")
    res.redirect("/agenda/lista/"+id)
}

module.exports=agendactl
