const {loadUsers , storeUsers } = require ('../data/db_Module');
const {validationResult} = require('express-validator'); 
const {hashSync}= require('bcryptjs');
const db = require('../database/models');

module.exports = {
    // REGISTRO
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);
        const {name,surname,email,password, street, city, province, phone, height} = req.body
        if(errors.isEmpty()){
        db.User.create({
                name : name,
                surname : surname,
                email : email,
                password : hashSync(password, 10),
                rolId : 2,
                street : street,
                city: city,
                province: province,
                phone: +phone,
                height: +height,
                avatar: req.file ? req.file.filename : 'default.jpg',
        })
                .then(() => {
                    res.redirect("/users/login");
                })
                .catch((errors) => console.log(errors))
            } else {
                res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
            });
            }
        },
        // LOGIN
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
                
                return res.redirect('/index');

            }).catch(error => console.log(error))
        }else {
            return res.render('users/login', {
                errors : errors.mapped(), 
                old: req.body
            })
        }
    },
    // PERFIL
    
    profile: (req, res) => {
        db.User.findByPk(req.session.login.id)
        .then((users)=>{
            res.render("users/profile",{
                
                users,
                
            })
        })
    },
    // EDITAR PERFIL   
    editProfile: (req, res) =>{
        db.User.findByPk(req.params.id)
    .then((users)=>{
        res.render("users/editProfile",{
            users,
            session:req.session,
        })
    })
    },
// EDICION
    update: (req, res) => {
    db.User.update(
        {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            street: req.body.street,
            height: req.body.height,
            city: req.body.city,
            province: req.body.province,
            avatar: req.file ? req.file.filename : req.session.login.avatar
        },
        {
            where:
            {
                id: +req.params.id
            }
        })
        .then((users) =>
        {
        req.session.login = {
            ...req.session.login,
            name: users.name,
            surname: users.surname,
            email: users.email,
            phone: users.phone,
            street: users.street,
            height: users.height,
            city: users.city,
            province: users.province,
            avatar: req.file ? req.file.filename : req.session.login.avatar
            
        };
        })
        
        res.redirect("/users/profile");
    },
    

    // DESLOGEARSE

    logout: (req, res) => {
    req.session.destroy();
    res.cookie('garrasAmigas', null, { maxAge: -1 });
    return res.redirect("/index");
    },


}