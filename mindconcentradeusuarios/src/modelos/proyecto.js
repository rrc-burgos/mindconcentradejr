const proyecto = (sequelize, type)=>{
    return sequelize.define('proyecto', {
        id_proyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProyecto : type.STRING,
        descripcionProyecto : type.STRING(2500),
        misionProyecto : type.STRING(2500),
        visionProyecto : type.STRING(2500),
        
 
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