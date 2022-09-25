const detalleConsejo = (sequelize, type)=>{
    return sequelize.define('detalleConsejo', {
        id_detalleConsejo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        consejos: type.STRING,

        creacionDetalleConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = detalleConsejo