import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET;

function verificaJWT(  req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoder ) => {
        if(error){
            console.log("Ocorreu um erro no token", token);
            res.status(401).end();
        } else {
            next();
        }
    })
}

export default verificaJWT;