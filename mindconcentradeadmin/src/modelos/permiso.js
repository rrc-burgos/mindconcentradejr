const permiso = (sequelize, type)=>{
    return sequelize.define('permiso', {
        id_permiso: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombrePermiso: type.STRING,
 
        creacionPermisos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionPermisos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = permiso