const fs = require('fs');
const path = require('path');

// configuracion de productos
const loadProducts = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8'));
};
const storeProducts = (products) => {
    return fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 3), 'utf-8');
};

// configuracion de usuarios
const loadUsers = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
};

module.exports = {
    loadProducts,
    storeProducts,
    loadUsers
}
