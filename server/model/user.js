
let db = require("./databaseConfig")
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt")
let config = require("../config")
const saltRounds = 5

let User = {

    // Creating a new User
    addUser : (username, email, type, password, callback) => {
        let conn = db.getConnection()
        conn.connect((err) => {
            if (err){
                console.log(err)
                return callback(err, null)
            }
            else{
                console.log('Connected!')
                bcrypt.hash(password, saltRounds, (errHashing, hashPassword) => {
                    if (errHashing){
                        console.log('ERROR HERE')
                        console.log(errHashing)
                        
                        return (errHashing, null)
                    }
                    else{
                        let SQL = 'INSERT INTO users(username, email, type, password) values(?, ?, ?, ?)'
                        conn.query(SQL, [username, email, type, hashPassword], (err, result) => {
                            if (err){
                                console.log('Error Inserting Record')
                                err.statusCode = 409
                                return callback(err, null)
                            }
                            else{
                                console.log(result)
                                return callback(null, {id: result.insertId, affectedRows: result.affectedRows})
                            }
                        })
                    }
                })
            }
        })

    },

    // user Login
    loginUser : (email, password, callback) => {
        let conn = db.getConnection()
        conn.connect((err) => {
            if (err){
                console.log(err)
                return callback(err, null, null)
            }
            else{
                console.log("Connected!")
                let SQL = 'SELECT * FROM users WHERE email=?'
                conn.query(SQL, [email, password], (err, result) => {
                    conn.end()
                    if (err){
                        console.log(err)
                        return callback(err, null)
                    }
                    else{
                        let token = ""
                        if (result.length == 1){
                            bcrypt.compare(password, result[0].password, (err, passwordMatch) => {
                                if (err){
                                    let errObj = new Error("Encryption error!")
                                    errObj.statusCode = 500
                                    return callback(errObj, null, null)

                                }
                                else{
                                    if (passwordMatch){
                                        let payload = { id: result[0].userid, role: result[0].type}
                                        token = jwt.sign(payload, config, {
                                            expiresIn: 86400
                                        })
                                        return callback(null, token, result)
                                    }
                                    else{
                                        let errObj = new Error("User Authentication failed")
                                        errObj.statusCode = 500
                                        return callback(errObj, null, null)
                                    }
                                }
                            })
                        }
                        else{
                            let errObj = new Error("user not Found")
                            errObj.statusCode = 500
                            return callback(errObj, null, null)
                        }
                    }
                })
            }
        })

    },

    // Get user information using username
    getUser : (username) => {
        let dbConnect = db.getConnection()
        dbConnect.connect((err) => {
            if (err){
                console.log('Connection Error')
                return callback(err, null)
            }
            else{
                let QUERY = 'SELECT * FROM users WHERE username=?'
                dbConnect.query(QUERY, [username], (err, result) => {
                    dbConnect.end()
                    if (err){
                        console.log('Connection Error')
                        return callback(err, null)
                    }
                    else{
                        console.log('Query Success')
                        return callback(null, result)
                    }
                })
            }
        })
    }

}


module.exports = User