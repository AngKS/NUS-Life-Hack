

let app = require("./controller/app.js")
let port = 8081

const server = app.listen(process.env.PORT || port, () => {
    console.log('App is hosted and running')
    
})