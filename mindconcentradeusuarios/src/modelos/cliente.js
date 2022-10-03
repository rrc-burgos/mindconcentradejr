const cliente = (sequelize, type)=>{
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCliente: type.STRING,
        apellidoCliente: type.STRING,
        cedulaCliente: type.STRING(10),
        direccionCliente: type.STRING,
        celularCliente: type.STRING(10),
        username: type.STRING,
        hobbieCliente: type.STRING,
        creacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionClientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cliente