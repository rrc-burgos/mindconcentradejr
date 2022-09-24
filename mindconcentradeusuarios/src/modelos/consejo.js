const consejo = (sequelize, type)=>{
    return sequelize.define('consejo', {
        id_consejo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreConsejo: type.STRING,
        fechaConsejo: type.STRING, 
 
        creacionConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = consejo