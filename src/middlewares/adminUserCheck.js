module.exports = (req,res,next) => {
    if(req.session.login && req.session.login.rol === "admin"){
        next()
    }else {
        res.redirect('/')
    }
}