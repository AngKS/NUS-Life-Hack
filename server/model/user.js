
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

    }

}


module.exports = User