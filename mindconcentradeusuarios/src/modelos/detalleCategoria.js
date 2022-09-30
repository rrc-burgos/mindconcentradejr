const detalleCategoria = (sequelize, type)=>{
    return sequelize.define('detalleCategoria', {
        id_detalleCategoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        creacionDetalleCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = detalleCategoria