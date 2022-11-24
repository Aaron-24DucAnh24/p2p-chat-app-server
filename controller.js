
const path = require('path')

/// init users ///
var users = [
    {name: 'Aaron', password: 'aaron',  ip: ''},
    {name: 'Duy',   password: 'duy',    ip: ''},
    {name: 'Bao',   password: 'bao',    ip: ''},
    {name: 'Hung',  password: 'hung',   ip: ''},
]

function isUser(loginData, clientIp) {
    for(var user of users)
        if(loginData.name == user.name && loginData.password == user.password){
            user.id = clientIp
            return true
        }
    return false
}

function handleRequest(app) {

    /// handle login ///
    app.post('/login', function(req, res) {
        var loginData = req.body
        var clientIp  = req.ip

        console.log('A new login request: ')
        console.log(loginData)
        console.log(clientIp)

        if(isUser(loginData, clientIp)) {
            res.json(loginData.name)
            console.log('Success!!!')
        }
        else {
            res.json(0)
            console.log('Failure!!!')
        }
    })

    /// handle register ///
    app.post('/register', function(req, res) {
        var regData = req.body
        var clientIp = req.ip

        console.log('A new register request: ')
        console.log(regData)
        console.log(clientIp)

        if(!isUser(regData, clientIp)) {
            users.push(regData)
            console.log('Success!!!')
            res.json(regData.name)
        }
        else {
            res.json(0)
            console.log('Failure!!!')
        }
    })

    /// handle logout ///
    app.post('/logout', (req, res) => {
        var userName = req.body.name
        for(var user of users) {
            if(user.name == userName) {
                user.ip = ''
            }
        }
        res.json(1)
        console.log(userName + ' logged out the system!!!')
    })

    app.get('/test', (req, res) => {
        console.log(req.ip)
        res.send('BUI NGOC DUC ANH => TEST GETTING IP ADDRESS FUNCTION ')
    })
}

module.exports = handleRequest
