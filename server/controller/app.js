
let express = require("express")
let bodyParser = require("body-parser")
let serveStatic = require("serve-static")

let path = require("path")
let cors = require("cors")
let jwt = require("jsonwebtoken")
let config = require("../config")

// API models
let user = require("../model/user")

// Initialize an instance of the Express Server
let app = express()





// Allow for cross-origin requests
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(cors())
app.use(urlencodedParser);
app.use(bodyParser.json()); //parse appilcation/json data
app.use(serveStatic(path.join(__dirname, '../public',)));

// Output and print the metadata of all the requests
app.use((req, res, next) => {
    console.log(`\n\n\nRequesting: ${req.url}\n Method:${req.method}\n Path: ${req.path}\n Headers: ${req.headers.authorization}\n Body: ${req.body}`)
    var d = new Date()
    console.log(`Request DateTime: ${d}`)
    next()
})


// Creating new user endpoint
app.post('/api/signup', (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let type = req.body.type
    let password = req.body.password
    user.addUser(username, email, type, password, (err, result) => {
        if (err) {
            if (err.errno == 1062) {
                console.log('Conflict Error')
                res.status(409).type("application/json").json({ status: 409, message: "User already Exist!" })
            }
            else {
                console.log(err)
            }
        }
        else {
            res.status(200).type("application/json").json({ status: 200, success: true, result: result, message: "User Successfully registered!" })
            console.log(result)
        }
    })
})

// User login endpoint
app.post('/api/login', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    user.loginUser(email, password, (err, token, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).type("application/json").json({ "Message": err.message, "status": "User not found" })

        }
        else {
            delete result[0]['password']
            let loginResult = { token: token, UserData: JSON.stringify(result), success: true, status: 'You are successfully logged in!' }
            console.log(loginResult)

            res.status(200).type('application/json').json(loginResult)
        }
    })
})


app.use((req, res) => {
    res.status(404).send("<h1>🐶Doggo Can't find the API you want🐶</h1>")
})


module.exports = app