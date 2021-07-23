
let db = require("./databaseConfig")

let Articles = {

    getAllArticles : (callback) => {
        let dbConnect = db.getConnection()
        dbConnect.connect((err) => {
            if (err) {
                console.log('Connection Error')
                return callback(err, null)
            }
            else {
                let QUERY = "SELECT * FROM articles"
                dbConnect.query(QUERY, (err, result) => {
                    dbConnect.end()
                    if (err) {
                        console.log('Query Error')
                        return callback(err, null)
                    }
                    else {
                        console.log('Query Success')
                        return callback(null, result)
                    }
                })
            }
        })
    }
}

module.exports = Articles