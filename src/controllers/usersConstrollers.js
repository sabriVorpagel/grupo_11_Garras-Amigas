 const {loadUsers} = require ('../data/db_Module');


module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    login : (req,res) => {
        return res.render('users/login')
    },
    perfil :(req, res) => {
        const users = loadUsers();

        const user = users.find(user => user.id === +req.params.id);

        return res.render('users/perfil', {
        user
        })
    },
    // update: (req,res) => {
    //     const users = loadUsers();
    //     const {id} = req.params;
    //     const { first_name, last_name, phone, email, password, password2, direction, heigth, postal_code, province, location } = req.params.id;

        // const usersModify = users.map(user => {
        //     if(user.id ===+id) {
        //         return {
        //             ...user,
        //             first_name: first_name.trim(),
        //             last_name : last_name.trim(),
        //             phone: +phone,
        //             email: +email,
        //             password : +password,
        //             password2 : +password2,
        //             direction: direction.trim(),
        //             heigth: +heigth,
        //             postal_code: +postal_code,
        //             province: +province,
        //             location: location.trim()               
        //         }
        //     }
            // return res.redirect('/')
                
//         })
//     }
}