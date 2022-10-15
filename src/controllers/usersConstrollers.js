const {loadUsers , storeUsers } = require ('../data/db_Module');
const {validationResult} = require('express-validator'); 
const {hashSync}= require('bcryptjs');
const fs = require('fs');
const path = require('path');

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            const {firstName, lastName, email, password, password2, phone, direction, heigth, location, province,imgUsers } = req.body;
            const users = loadUsers();
    
            const newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                phone: +phone,
                email : email.trim(), 
                password : hashSync(password.trim(),10),
                password2 : null,
                direction : direction.trim(),
                heigth : +heigth,
                location :location.trim(),
                province : province.trim(),
                imgUsers: req.file ? req.file.filename : 'default.jpg',
                
            };

             
               
    
            const usersModify = [...users, newUser];
            storeUsers(usersModify);
            return res.redirect('/users/login')
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
            let {id, email, password, imgUsers, rol} = loadUsers().find(user => user.email === req.body.email);
        req.session.login= {id, email, password, imgUsers, rol} 
            return res.redirect('/')
        }else {
            return res.render('users/login', {
                errors : errors.mapped(), 
                old: req.body
            })
        }
    },
    
    profile: (req, res) => {
        const users = loadUsers().find((user) => user.id === req.session.login.id);
       
        return res.render("users/profile", {
        title: "Garras Amigas | Mi perfil",
        users,
        });
    },

    editProfile: (req, res) =>{
        let users = loadUsers().find((user) => user.id === req.session.login.id);
        return res.render("users/editProfile", {
            users,
         })
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