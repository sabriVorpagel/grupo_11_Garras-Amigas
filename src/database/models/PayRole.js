module.exports = (sequelize, dataTypes) => {

    const alias = "PayRole";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name :{
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
        release_date :{
            type : dataTypes.DATE,
            allowNull : true,
        },
        final_pricce : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
        createdAt: {
            type : dataTypes.DATETIME,
            allowNull : true,
        },
        updateAt : {
            type : dataTypes.DATETIME,
            allowNull : true,
        },
        deleteAt : {
            type : dataTypes.DATETIME,
            allowNull : true,
        },
       
    }

    const config = {
        tableName : 'payRoles' ,
        timestamp : true,
        underscored : true,
    }
    const PayRole = sequelize.define(alias, cols, config)

    return PayRole
}