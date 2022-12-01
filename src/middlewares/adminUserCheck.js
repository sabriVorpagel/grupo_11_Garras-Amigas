module.exports = (req,res,next) => {
    if(req.session.login && req.session.login.rolId === 1 ){
        next()
    }else {
        res.redirect('/')
    }
}