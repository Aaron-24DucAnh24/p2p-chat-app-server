
const Users = require('../users')

function handleRequest(app) {

    /// handle login
    app.post('/login', function(req, res) {
        var loginData = req.body
        var clientIp  = req.body.ip

        console.log('A new login request: ')
        console.log(loginData)

        if(Users.isUser(loginData)) {
            Users.setIP(loginData.name, clientIp)
            res.json(loginData.name)
            console.log('Success!!!')
        }
        else {
            res.json(0)
            console.log('Failure!!!')
        }
    })

    /// handle register
    app.post('/register', function(req, res) {
        var regData = req.body
        var clientIp = req.body.ip

        console.log('A new register request: ')
        console.log(regData)

        if(!Users.isUser(regData)) {
            Users.add(regData)
            Users.setIP(regData.name, clientIp)
            console.log('Success!!!')
            res.json(regData.name)
        }
        else {
            res.json(0)
            console.log('Failure!!!')
        }
    })

    /// handle logout
    app.post('/logout', (req, res) => {
        var userName = req.body.name
        if(Users.deleteIP(userName)){
            res.json(1)
            console.log(userName + ' logged out the system!!!')
        } else res.json(0)
    })

    /// advertise client address to each other
    app.get('/:name', (req, res) => {
        requestUser = req.params.name
        var result = Users.getIP(requestUser)
        if(result.length != 0)
            res.json(result)
        else res.json(0)
    })
}

module.exports = handleRequest
