const admin = ['veronica','sabrina' ,'santiago'];

module.exports = (req,res,next) => {
    if(admin.includes(req.query.user)){
        next()
    }else {
        res.redirect('/adm/loginAdm?error=true')
    }
}