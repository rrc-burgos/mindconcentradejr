const detallePregunta = (sequelize, type)=>{
    return sequelize.define('detallePregunta', {
        id_detallePregunta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        objetivosPregunta: type.STRING(2500),


        creacionDetallePregunta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetallePregunta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = detallePregunta