const {loadUsers , storeUsers } = require ('../data/db_Module');
const {validationResult} = require('express-validator'); 
const {hashSync}= require('bcryptjs');
const db = require('../database/models');

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);
        const {name,surname,email,password} = req.body
         if(errors.isEmpty()){
        db.User.create({
                name : name,
                surname : surname,
                email : email,
                password : hashSync(password, 10),
                rolId : 2,
                avatar: req.file ? req.file.filename : 'default.jpg'
            }).then(user => {
            db.Address.create({
                    userId: user.id
            }).then( () => {
                    return res.redirect('/users/login')
            })
            }).catch(error => console.log(error))  
            }else {
            return res.render('users/register', {
                errors : errors.mapped(),
                old : req.body
            })
        }      
    },
    login : (req,res) => {
        return res.render('users/login')
    }, 
    processLogin : (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.User.findOne({
                where : {
                    email : req.body.email
                }
            }).then(({id, name, avatar, rolId}) => {
                req.session.login = {
                    id,
                    name,
                    avatar,
                    rolId
                };
                req.body.remember && res.cookie('garrasamigas',req.session.login, {maxAge : 1000 * 60});
                
                return res.redirect('/');

            }).catch(error => console.log(error))
        }else {
            return res.render('users/login', {
                errors : errors.mapped(), 
                old: req.body
            })
        }
    },
    
    profile: (req, res) => {
        let users = db.User.findByPk(req.session.login.id)
        
        Promise.all([users])
            .then(([users]) => {
                return res.render('users/profile',{
                    users,
                })
            })
            .catch(error => console.log(error))
    },

    editProfile: (req, res) =>{
        let users = db.User.findByPk(req.params.id)
        
        Promise.all([users])
            .then(([users]) => {
                return res.render('users/editProfile',{
                    users,
                })
            })
            .catch(error => console.log(error))
    },

    update: (req, res) => {
       const  users = loadUsers(); 
       const { firstName, lastName, email, password, password2, phone, direction, heigth, location, province,imgUsers } = req.body;
       const usersModify = loadUsers().map((user) => {
           if (user.id === +req.params.id) {
               return {
               ...user,
               ...req.body,
               imgUsers:  imgUsers,
               };
           }
           return user;
    })
       storeUsers(usersModify);
       return res.redirect("/users/profile");
    },



    logout: (req, res) => {
    req.session.destroy();
    res.cookie('garrasAmigas', null, { maxAge: -1 });
    return res.redirect("/index");
    },


}