const consejo = (sequelize, type)=>{
    return sequelize.define('consejo', {
        id_consejo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numeroConsejo: type.STRING,
        descripcionConsejos: type.STRING,
 
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