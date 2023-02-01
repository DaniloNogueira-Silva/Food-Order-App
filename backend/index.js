const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const dotenv = require('dotenv').config();
const app = express();

// conexão com o banco
require('./db');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// rotas
app.use('/auth', authController);
app.use('/product', productController);

// iniciando o server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server iniciado com sucesso')
});