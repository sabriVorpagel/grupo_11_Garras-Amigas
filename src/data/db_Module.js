const fs = require('fs');
const path = require('path');

// configuracion de productos
const loadProducts = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8'));
};
const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 3), 'utf-8');
};

const loadClass = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'class.json'), 'utf-8'));
};
const loadCategorys = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'categorys.json'), 'utf-8'));
};
// configuracion de usuarios
const loadUsers = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
};
const storeUsers = (users) => {
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 3), 'utf-8');
};

module.exports = {
    loadProducts,
    storeProducts,
    loadCategorys,
    loadClass,
    loadUsers,
    storeUsers
}
