module.exports = (sequelize, dataTypes) => {

    const alias = "User";

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
       fisrt_name : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        last_name : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        direction : {
            type : dataTypes.Text(255),
            allowNull : true,
        },
        heigth : {
            type : dataTypes.INTEGER,
            allowNull : true,
        },
        email : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        phone : {
            type : dataTypes.INTEGER,
            allowNull : true,
        },
        password : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        
        location : {
            type : dataTypes.STRING(105),
            allowNull : true,
        },
        province : {
            type : dataTypes.STRING(105),
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
        rolId :{
            type : dataTypes.INTEGER,
            allowNull : true,
            references : {
                model : {
                    tableName : 'User'
                },
                key : 'id'
            }
        },
        }
    }

    const config = {
        tableName : 'users' ,
        timestamp : true,
        underscored : true,
    }
    const User = sequelize.define(alias, cols, config)

    return User

