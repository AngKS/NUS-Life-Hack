var jwt = require('jsonwebtoken');
var config = require('../config');

// Name: Ang Kah Shin
// Class: DAAA / FT / 1B / 04
// Admin: P2004176


function verifyToken(req, res, next) {

    var token = req.headers['authorization']; //retrieve authorization header’s content

    if (!token || !token.includes('Bearer')) { //process the token
        res.status(403).type('application/json');
        res.json({ auth: false, message: 'Not authorized!' });
    } else {
        token = token.split(' ')[1]; //obtain the token’s value
        jwt.verify(token, config, function (err, decoded) {//verify token
            if (err) {
                res.status(403).type('application/json');
                res.json({ auth: false, message: 'Not authorized!' });
            } else {
                req.userid = decoded.userid; //decode the userid and store in req for use
                req.role = decoded.role; //decode the role and store in req for use
                next();
            }
        });
    }
}

module.exports = verifyToken;
