const agenda =(sequelize, type) =>{
    return sequelize.define('agenda', {
        id_agenda: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        hora: type.STRING,
        fecha: type.STRING,

        creacionAgendas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionAgendas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = agenda
