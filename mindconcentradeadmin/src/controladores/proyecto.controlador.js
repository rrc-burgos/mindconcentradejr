const proyectoctl ={}

const orm = require("../configbd/database.orm")
const sql = require("../configbd/database.sql")

proyectoctl.mostrar= async(req,res)  =>{
    const idMax = await sql.query("SELECT max(id_proyecto) FROM proyectos ")
    res.render("proyecto/agregar",{idMax})
}

proyectoctl.enviar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreProyecto,descripcionProyecto, misionProyecto, visionProyecto, objetivos,numero} = req.body
    const nuevoProyecto ={
        nombreProyecto,
        descripcionProyecto,
        misionProyecto,
        visionProyecto,
        usuarioIdUsuario:id
    }
    await orm.proyecto.create(nuevoProyecto)
    for (let i=0; i< objetivos.length; i++){
        await sql.query("insert into detalleProyectos(objetivosProyecto,proyectoIdProyecto) values(?,?)",[objetivos[i],numero])
    }
    req.flash("success","Exito al Guardar")
    res.redirect("/proyecto/lista/"+id)
}

proyectoctl.listar = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from proyectos where usuarioIdUsuario =?",[id])
    const detalleLista = await sql.query("select * from detalleProyectos where proyectoIdProyecto =?", [ids])
    res.render("proyecto/listar",{lista,detalleLista})
}

proyectoctl.traer = async (req,res)=>{
    const id = req.user.id_usuario
    const ids = req.params.id 
    const lista = await sql.query("Select * from proyectos where id_proyecto =?",[ids])
    const detalleLista = await sql.query("select * from detalleProyectos where proyectoIdProyecto =?", [ids])
    res.render("proyecto/editar",{lista,detalleLista})
}

proyectoctl.actualizar = async(req,res) =>{
    const id = req.user.id_usuario
    const ids = req.params.id
    const{nombreProyecto,descripcionProyecto, misionProyecto, visionProyecto, objetivos} = req.body
    const nuevoProyecto ={
        nombreProyecto,
        descripcionProyecto,
        misionProyecto,
        visionProyecto
    }
    await orm.proyecto.findOne({where:{id_proyecto:ids}})
    .then(actualizar => {
        actualizar.update(nuevoProyecto)
    })
    for (let i=0; i< objetivos.length; i++){
        await sql.query("update detalleProyectos set objetivosProyecto =? where id_detalleProyecto =?",[objetivos[i],(parseInt(ids)+i)])
    }
    req.flash("success","Exito al Actualizar")
    res.redirect("/proyecto/lista/"+id)
}

proyectoctl.cerrarSesion = (req, res, next) => {

    req.logOut()
    res.redirect("/")
}

module.exports=proyectoctl
