
let db = require("./databaseConfig")

let Course = {

    getAllCourse : () => {
        let dbConnect = db.getConnection()
        dbConnect.connect((err) => {
            if (err){
                console.log('Connection Error')
                return callback(err, null)
            }
            else{
                let QUERY = "SELECT * FROM courses"
                dbConnect.query(QUERY, (err, result) => {
                    dbConnect.end()
                    if (err){
                        console.log('Query Error')
                        return callback(err, null)
                    }
                    else{
                        console.log('Query Success')
                        return callback(nul, result)
                    }
                })
            }
        })
    },

    addCourse : (courseName, duration, studentCount, tutor, rating, image, description, link) => {
        let dbConnect = db.getConnection()
        dbConnect.connect((err) =>{
            if (err){
                console.log('Connection Error')
                return callback(err, null)
            }
            else{
                let QUERY = `INSERT INTO courses (courseName, duration, studentCount, tutor, rating, image, description, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                dbConnect.query(QUERY, [courseName, duration, studentCount, tutor, rating, image, description, link], (err, result) =>{
                    dbConnect.end()
                    if (err){
                        console.log('Query Error')
                        return callback(err, null)
                    }
                    else{
                        return callback(null, result)
                    }
                })
            }
        })
    }
}