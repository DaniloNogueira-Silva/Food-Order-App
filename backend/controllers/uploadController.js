const uploadController = require('express').Router();
const { response } = require('express');
const multer = require('multer');
const { verifyTokenAdmin } = require('../middlewares/verifyToken');

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    }
});

const upload = multer({
    storage: storage
});

uploadController.post('/image', verifyTokenAdmin, upload.single('image', (req,res) => {
    try {
        return res.status(201).json({msg: 'Arquivo enviado com sucesso'})
    } catch (error) {
        console.log(error.message);
    }
}));

module.exports = uploadController