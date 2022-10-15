module.exports = (sequelize, dataTypes) => {

    const alias = "Product";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
       
        name : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        price : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : true,
        },
        description : {
            type : dataTypes.Text(255),
            allowNull : true,
        },
        stock : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
        
        categoriesId : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
            references : {
                model : {
                    tableName : 'Category'
                },
                key : 'id'
            }
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
        }

    }

    const config = {
        tableName : 'products' ,
        timestamp : true,
        underscored : true,
    }
    const Product = sequelize.define(alias, cols, config)

    return Product
}