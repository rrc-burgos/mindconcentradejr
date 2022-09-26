const usuario =(sequelize, type) =>{
    return sequelize.define('usuario', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        nombre:type.STRING,
        apellido:type.STRING,
        cedula:type.STRING,
        direccion:type.STRING,
        telefono:type.STRING,
        correo:type.STRING,
        cargo:type.STRING,
        foto:type.STRING,
        password: type.STRING,
        estadoDeIniciodeSesion: type.STRING,
        creacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = usuario