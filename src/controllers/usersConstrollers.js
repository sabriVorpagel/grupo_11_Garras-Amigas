 const {loadUsers , storeUsers} = require ('../data/db_Module');
 

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister: (req,res) => {
        const users = loadUsers();
        const id = users[users.length - 1].id;
        const { firstName, lastName, phone, email, password, password2, direction, heigth, postal_code, province, location, imgUsers} = req.body;

        const newUser =  {
            id : id +1,
            ...req.body,
            firstName: firstName.trim(),
            lastName : lastName.trim(),
            phone: +phone,
            email: +email,
            password : +password,
            password2 : +password2,
            direction: direction.trim(),
            heigth: +heigth,
            postal_code: +postal_code,
            location: location.trim(),
            province: +province,
            imgUsers: imgUsers          
        }
        const usersModify = [...users, newUser];
        storeUsers(usersModify);
        return res.send(req.body);
            
        
    },
    login : (req,res) => {
        return res.render('users/login')
    }, 
    // processLogin : (req, res) =>{
    //     return res.send(req.body)
    // },
    profile :(req, res) => {
        return res.render('users/profile')
       
    },
    update : (req, res) =>{
        return res.send(req.body)
    }

   
}