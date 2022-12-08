const db = require('../../database/models');
const {hashSync} = require('bcryptjs');
const {validationResult} = require('express-validator');
const {sign} = require('jsonwebtoken');

module.exports = {
    //Registro de usuario y devuelve token.
    processRegister: async (req,res) => {
        console.log('processRegister');
        try{
            let errors = validationResult(req);
            
            const {name,surname,email,password, street, city, province, phone, height} = req.body;
            
            errors = errors.mapped();
            
            if(Object.entries(errors).length === 0){
                console.log("sin errores");
                const user = await db.User.create({
                    name : name.trim(),
                    surname : surname.trim(),
                    email : email.trim(),
                    password : hashSync(password, 10),
                    rolId : 2,
                    street : street.trim(),
                    city: city.trim(),
                    province: province.trim(),
                    phone: +phone,
                    height: +height,
                    avatar: req.file ? req.file.filename : 'default.jpg',
                }).catch(err => console.log(err));

                console.log(user);
                const token = sign(
                    {
                        id: user.id,
                        rol: user.rol
                    },
                    process.env.SECRET_TOKEN,
                    {
                        expiresIn:'1h'
                    }
                )
                res.status(201).json({
                    status: 201,
                    meta:{
                        User_Create:'Ok'
                    },
                    data:{
                        data: user
                    },
                    Security: {Token:token}
                })
            }else{
                throw errors
            }
        } catch(errors){
            let msgErrorsObjet = {}
            
            for(const property in errors){
                console.log(msgErrorsObjet)
                msgErrorsObjet={
                    ...msgErrorsObjet,
                    [property] : errors[property].msg
                }
            }
            return res.json({
                meta:{
                    User_Create: "No process"
                },
                validatorErrors: msgErrorsObjet
            })
        }
    },

    processLogin: async (req,res) => {
        const errors = validationResult(req);
        try{
            if(errors.isEmpty()){
                const user = await db.User.findOne({
                    where:{
                        email:req.body.email
                    }
                })
                const token = sign(
                    {
                        id: user.id,
                        rol: user.rol
                    },
                    process.env.SECRET_TOKEN,
                    {
                        expiresIn: '1h'
                    }
                )
                return res.status(200).json({
                    Meta:{
                        process_login: 'OK'
                    },
                    Status: 200,
                    Data:{
                        Token: token
                    }
                })
            }
            throw errors
        }catch(error){
            console.log(error);
            let msgErrorsObjet1 = {};
            error.errors.forEach(err => {
                msgErrorsObjet1 ={
                    ...msgErrorsObjet1,
                    [err.param]: err.msg
                }
            })
            return res.status(400).json({
                msg: msgErrorsObjet1,
                errores: error
            })
        }
    }
}