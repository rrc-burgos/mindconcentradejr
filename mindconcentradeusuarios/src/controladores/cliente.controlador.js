const Clientectl = {};

const orm = require("../configbd/database.orm");
const sql = require("../configbd/database.sql");

Clientectl.mostrar = async (req, res) => {
  const lista = await sql.query(
    "Select * from clientes "
  );
  res.render("cliente/agregar",{lista});
};

Clientectl.enviar = async (req, res) => {
  const id = req.user.id_cliente;
  const ids = req.params.id;
  const { 
    nombreCliente, 
    hobbieCliente,
    cedulaCliente,  
    direccionCliente,
    username,
    apellidoCliente,
    CelularCliente } = req.body;
  const nuevoCliente= {
    nombreCliente,
    apellidoCliente,
    cedulaCliente,
    direccionCliente,
    CelularCliente,
    username,
    hobbieCliente
  }
  await orm.cliente.create(nuevoCliente);
  req.flash("success", "Exito al Guardar");
  res.redirect("/cliente/lista/1" );
};

Clientectl.listar = async (req, res) => {
  const id = req.user.id_usuario;
  const ids = req.params.id;
  const lista = await sql.query(
    "Select * from clientes "
  );

  res.render("cliente/listar", { lista });
};

Clientectl.traer = async (req, res) => {
  const id = req.user.id_cliente;
  const ids = req.params.id;
  const lista = await sql.query("Select * from clientes where id_cliente =?", [
    ids,
  ]);

  res.render("cliente/editar", { lista });
};

Clientectl.actualizar = async (req, res) => {
  const id = req.user.id_cliente;
  const ids = req.params.id;
  const {
    nombreCliente,
    apellidoCliente,
    username,
    direccionCliente,
    celularCliente,
    hobbieCliente,
  } = req.body;
  const nuevaCliente = {
    nombreCliente,
    apellidoCliente,
    username,
    direccionCliente,
    celularCliente,
    hobbieCliente,
  };
  await orm.cliente.findOne({ where: { id_cliente: ids } }).then((actualizar) => {
    actualizar.update(nuevaCliente);
  });

  req.flash("success", "Exito al Actualizar");
  res.redirect("/cliente/lista/" + id);
};

Clientectl.eliminar = async (req, res) => {
  const id = req.user.id_usuario;
  const ids = req.params.id;
  await orm.cliente.destroy({ where: { id_cliente: ids } });

  req.flash("success", "Exito al Eliminar");
  res.redirect("/cliente/lista/" + id);
};

module.exports = Clientectl;

