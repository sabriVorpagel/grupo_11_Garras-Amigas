module.exports = (sequelize, dataTypes) => {

    const alias = "Cart";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        orderId : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
            references : {
                model : {
                    tableName : 'Order'
                },
                key : 'id'
            }
        },
        product_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
            references : {
                model : {
                    tableName : 'Product'
                },
                key : 'id'
            }
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
        tableName : 'carts' ,
        timestamp : true,
        underscored : true,
    }
    const Cart = sequelize.define(alias, cols, config)

    return Cart
}
