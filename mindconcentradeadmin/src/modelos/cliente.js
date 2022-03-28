const cliente = (sequelize, type)=>{
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        cedula: type.STRING,
        direccion: type.STRING,
        Celular: type.INTEGER(10),
        username: type.STRING(99),
        password: type.STRING, 
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