const {loadUsers , storeUsers } = require ('../data/db_Module');
const {validationResult} = require('express-validator'); 
const {hashSync}= require('bcryptjs');

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            const {firstName, lastName, email, password, phone, direction, heigth,postal, location, province,imgUsers } = req.body;
            const users = loadUsers();
    
            const newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                ...req.body,
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                phone: +phone,
                email : email.trim(), 
                password : hashSync(password.trim(),10),
                direction : direction.trim(),
                heigth : +heigth,
                postal : +postal,
                location :location.trim(),
                province : province.trim(),
                imgUsers: imgUsers 
            }
    
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
            let {id, email, password, imgUsers} = loadUsers().find(user => user.email === req.body.email);
        req.session.userLogin= {id, email, password, imgUsers} 
            return res.redirect('/products/product')
        }else {
            return res.render('users/login', {
                errors : errors.mapped(), 
                old: req.body
            })
        }
    },
    profile :(req, res) => {
        return res.render('users/profile')
    },
    update : (req, res) =>{
        return res.send(req.body)
    }

}