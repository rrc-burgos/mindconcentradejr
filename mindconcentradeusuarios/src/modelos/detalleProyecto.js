const detalleProyecto = (sequelize, type)=>{
    return sequelize.define('detalleProyecto', {
        id_detalleProyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        objetivosProyecto: type.STRING(2500),

        creacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = detalleProyecto