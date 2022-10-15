module.exports = (sequelize, dataTypes) => {

    const alias = "Product";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
       
        total : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
        userId : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
            references : {
                model : {
                    tableName : 'User'
                },
                key : 'id'
            }
        },
        payRoleId : {
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
        tableName : 'products' ,
        timestamp : true,
        underscored : true,
    }
    const Product = sequelize.define(alias, cols, config)

    return Product
}