const proyecto = (sequelize, type)=>{
    return sequelize.define('proyecto', {
        id_proyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : type.STRING,
        descripcion : type.STRING,
        mision : type.STRING,
        vision : type.STRING,
        detalleProyecto: type.STRING,
        Objetivo : type.STRING,
 
        creacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = proyecto