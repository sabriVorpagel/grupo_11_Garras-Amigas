const multer = require ('multer');
const path = require ('path');

const storageUsers = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, './public/images/users')
    },
    
    filename : (req, file, callback)=> {
        callback(null, `users-${Date.now()}${path.extname(file.originalname)}`)
       
    },
})

const uploadUsers= multer ({
    storage : storageUsers
})
module.exports = { 
    uploadUsers
}