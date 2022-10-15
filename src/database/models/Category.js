module.exports = (sequelize, dataTypes) => {

    const alias = "Category";

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
        
    }

    const config = {
        tableName : 'categorys' ,
        timestamp : true,
        underscored : true,
    }
    const Category = sequelize.define(alias, cols, config)

    return Category
}