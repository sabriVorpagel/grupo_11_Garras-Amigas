module.exports = (req, res, next) => { 
    if (req.session.login){
        res.locals.login = req.session.login
    }
    next() 
}