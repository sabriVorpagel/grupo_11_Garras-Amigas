const multer = require ('multer');
const path = require ('path');

const storageUsers = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, './public/images/users')
    },
    
    filename : (req, file, callback)=> {
        callback(null, `imgUsers-${Date.now()}${path.extname(file.originalname)}`)
       
    },
});
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        req.fileValidationError = "Solo se permite imágenes jpg, jpeg, png, gif, webp";
        return callback(null, false, req.fileValidationError)
    }
    return callback(null, true)
}


const uploadUsers= multer ({
    storage : storageUsers,
    fileFilter
})
module.exports = { 
    uploadUsers
}