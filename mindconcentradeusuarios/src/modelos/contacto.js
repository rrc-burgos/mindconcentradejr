const contacto =(sequelize, type) =>{
    return sequelize.define('contacto', {
        id_contacto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreContacto: type.STRING,
        emailContacto: type.STRING,
        sugerenciasContacto: type.STRING ,

       
        creacionContactos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionContactos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = contacto