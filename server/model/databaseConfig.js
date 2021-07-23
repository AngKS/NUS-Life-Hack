
const mysql = require("mysql2")

const dbConnect = {

    getConnection : () => {
        let conn = mysql.createConnection({
            host: "localhost",
            user : "root",
            password : 'root',
            database: "lifeHack"
        })
        return conn
    }
}

module.exports = dbConnect