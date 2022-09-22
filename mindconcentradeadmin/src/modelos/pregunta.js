const pregunta = (sequelize, type)=>{
    return sequelize.define('pregunta', {
        id_pregunta:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numeroPregunta : type.STRING,
        pregunta : type.STRING(2500),
        observacion : type.STRING(2500),
        estado : type.STRING(2500),


        creacionPregunta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionPregunta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = pregunta