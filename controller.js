
const path = require('path')

/// init users ///
var users = [
    {name: 'Aaron', password: 'aaron'},
    {name: 'Duy', password: "duy"},
    {name: 'Bao', password: "bao"},
    {name: 'Hung', password: "tram <3"},
]

function isUser(loginData) {
    for(var user of users)
        if(loginData.name == user.name && loginData.password == user.password)
            return true
    return false
}

function handleRequest(app) {
    
    app.get('/', (req, res) => {
        res.send('hello')
    })

    /// handle login ///
    app.post('/login', function(req, res) {
        var loginData = req.body
        console.log('A new login request: ')
        console.log(loginData)

        if(isUser(loginData)) {
            res.json(1)
            console.log('Success!!')
        }
        else res.json(0)
    })

    /// handle register
    app.post('/register', function(req, res) {
        var regData = req.body
        console.log('A new register request: ')
        console.log(regData)

        if(!isUser(regData)) {
            users.push(regData)
            console.log('Success!!!')
            res.json(1)
        }
        else res.json(0)
    })

}

module.exports = handleRequest
