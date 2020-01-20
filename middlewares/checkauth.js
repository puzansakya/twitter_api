
const jwt = require('jsonwebtoken')

async function check(req, res, next) {
    const header = req.headers.authorization;

    if (header) {
        try {
            const jwt_token = header.split(" ")[1];
            console.log(jwt_token)
            const payload = await jwt.verify(jwt_token, 'secret');
            req["user"] = payload;
            next()
        }
        catch (err) {
            next();
        }
    }
    else {
        // res.sendStatus(403);
        next();
    }
}
module.exports = {
    check: check
}