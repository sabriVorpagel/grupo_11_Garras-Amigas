module.exports = (sequelize, dataTypes) => {

    const alias = "Rol";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        admin : {
            type : dataTypes.STRING(45),
            allowNull : true,
        },
    }
    const config = {
        tableName : 'rols' ,
        timestamp : true,
        underscored : true,
    }
    const Rol = sequelize.define(alias, cols, config)

    return Rol
}