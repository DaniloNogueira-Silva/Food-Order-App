const uploadController = require('express').Router();

const multer = require('multer');
const { verifyToken } = require('../middlewares/verifyToken');

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    }
});

const upload = multer({
    storage
});

uploadController.post('/image', verifyToken, upload.single('image', (req,res) => {
    try {
        return res.status(201).json({msg: 'Arquivo enviado com sucesso'})
    } catch (error) {
        console.log(error.message);
    }
}));

module.exports = uploadController