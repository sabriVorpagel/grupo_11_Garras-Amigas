require('dotenv').config()
const express = require("express");
const path = require('path');
const app = express();


/*recursos estaticos*/

app.use(express.static('public'));
app.set('puerto', process.env.PORT || 3001);

/*rutas*/
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));
app.get('/productdetail', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')));
app.get('/productCart', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productCart.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));

/*puerto*/
app.listen(process.env.PORT || 3000, function() { 
    console.log('Servidor corriendo en el puesto 3030')
})

