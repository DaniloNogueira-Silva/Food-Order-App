const jwt = require('jsonwebtoken');

// verifyToken
const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({msg: "Acesso não autorizado, não há token"});

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        const token = req.headers.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) return res.status(403).json({msg: "Token errado ou expirado"})
            else {
                req.user = data
                next()
            }
        });
    }
};

// verifyToken Admin
const verifyTokenAdmin = (req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({msg: "Acesso não autorizado, não há token"});

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        const token = req.headers.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) return res.status(403).json({msg: "Token errado ou expirado"})
            else {
                // data = {id: user._id, isAdmin: user.isAdmin}
                if(!data.isAdmin) return res.status(403).json({msg: "Você não é Admin"})
                req.user = data
                next()
            }
        });
    }
};

module.exports = {
    verifyToken,
    verifyTokenAdmin
}