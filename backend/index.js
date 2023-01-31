const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

// conexão com o banco
require('./db');

// iniciando o server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server iniciado com sucesso')
});