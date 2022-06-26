const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'secretValue')
        req.user = decode
        next()
    }
    catch {
        res.status(400).send('Authorization Failed!')
    }
}

module.exports = {
    authorization
}