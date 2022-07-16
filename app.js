const express = require("express");
const path = require('path');
const app = express();
const port = 3030;

/*recursos estaticos*/

app.use(express.static('public'));

/*rutas*/
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/productdetail', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')));
app.get('/productCart', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productCart.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));

/*puerto*/
app.listen(port, () => console.log("Server running in htpp://localhost:" + port))

