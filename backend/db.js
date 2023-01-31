const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function connection(){
    await mongoose.connect(process.env.DB);

    console.log('Conectado com sucesso');
};

connection().catch((err) => console.log(err));

module.exports = connection