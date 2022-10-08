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
            const {firstName, lastName, email, password, password2, phone, direction, heigth,postal, location, province,imgUsers } = req.body;
            const users = loadUsers();
    
            const newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                ...req.body,
                firstName : firstName,
                lastName : lastName,
                phone: +phone,
                email : email, 
                password : hashSync(password,10),
                password2 : password2,
                direction : direction,
                heigth : +heigth,
                postal : +postal,
                location :location,
                province : province,
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
        req.session.login= {id, email, password, imgUsers} 
            return res.redirect('/')
        }else {
            return res.render('users/login', {
                errors : errors.mapped(), 
                old: req.body
            })
        }
    },

    profile: (req, res) => {
        const users = loadUsers();
        const id = req.session.login.id;
        const user = users.find((user) => user.id === +id);
        return res.render("users/profile", {
        title: "Garras Amigas | Mi perfil",
        user,
        });
    },

    editProfile: (req, res) =>{
        return res.send(req.body)
    },
    logout: (req, res) => {
    req.session.destroy();
    res.cookie('garrasAmigas', null, { maxAge: -1 });
    return res.redirect("/");
    },


}