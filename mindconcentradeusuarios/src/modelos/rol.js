const rol = (sequelize, type)=>{
    return sequelize.define('rol', {
        id_rol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreRol : type.STRING,
        descripcionRol : type.STRING(2500),

        creacionRoles:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRoles:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = rol
