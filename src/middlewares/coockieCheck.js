module.exports = (req, res, next) => {
    if(req.cookies.garrasAmigas){
        req.session.login = req.cookies.garrasAmigas
    }
    next()
}