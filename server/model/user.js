
let db = require("./databaseConfig")
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt")
let config = require("../config")
const { isModuleNamespaceObject } = require("util/types")
const saltRounds = 10

let User = {

    // Creating a new User
    addUser : (username, email, type, password, callback) => {
        let conn = db.getConnection()
        conn.connect((err) => {
            
        })

    }

}


module.exports = User