module.exports = (req, res, next) => { 
    res.locals.login  = req.session.login && req.session.login;
    next() 
}