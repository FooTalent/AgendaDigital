import jwt from 'jsonwebtoken';

const generatorJWT = (user) => {

return jwt.sign({user},process.env.JWT_SECRET, {
expiresIn: '30d'})

}

export default generatorJWT;