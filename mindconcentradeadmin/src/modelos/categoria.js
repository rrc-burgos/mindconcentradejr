const categoria = (sequelize, type)=>{
    return sequelize.define('categoria', {
        id_categoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria : type.STRING,
        descripcionCategoria : type.STRING(2500),
        
        creacionCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        
        actualizacionCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = categoria