// const {users} = require ('../data/users')


module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    login : (req,res) => {
        return res.render('users/login')
    },
    // edit :(req, res) => {
    //     return res.render('users/registerEdit')
    // }
}