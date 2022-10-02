const cliente = (sequelize, type)=>{
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCliente: type.STRING,
        apellidoCliente: type.STRING,
        cedulaCliente: type.STRING,
        direccionCliente: type.STRING,
        CelularCliente: type.INTEGER(10),
        username: type.STRING(99),
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