const opinion = (sequelize, type)=>{
    return sequelize.define('opinion', {
        id_opinion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentarios: type.STRING,
        fecha: type.STRING , 
 
        creacionOpiniones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionOpiniones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = opinion