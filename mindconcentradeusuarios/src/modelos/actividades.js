const actividades =(sequelize, type) =>{
    return sequelize.define('actividades', {
        id_actividades: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreActividad: type.STRING,
        descripcionActividad: type.STRING,
        fechaActividad: type.STRING ,
        
        creacionActividades:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionActividades:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = actividades