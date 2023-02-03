const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const uploadController = require('./controllers/uploadController');
const dotenv = require('dotenv').config();
const app = express();

// conexão com o banco
require('./db');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// rotas
app.use('/images', express.static('public/images'))
app.use('/auth', authController);
app.use('/product', productController);
app.use('/upload', uploadController);

// iniciando o server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server iniciado com sucesso')
});