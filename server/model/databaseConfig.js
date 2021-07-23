
const mysql = require("mysql2")
require('dotenv').config()

// let host = "us-cdbr-east-04.cleardb.com"
// let user = "b5d02c0ea9d374"
// let password = '14de11c8'
// let database = "heroku_63568d7045ab70d"

const dbConnect = {

    getConnection : () => {
        let conn = mysql.createConnection({
            host: host || "localhost",
            user: user || "root",
            password: password || "root",
            database: database || "lifeHack"
        })
        return conn
    }
}

module.exports = dbConnect