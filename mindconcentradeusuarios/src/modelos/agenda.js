const agenda =(sequelize, type) =>{
    return sequelize.define('agenda', {
        id_agenda: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreAgenda: type.STRING,
        descripcionAgenda: type.STRING,
        horaAgenda: type.STRING,
        fechaAgenda: type.STRING,

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
