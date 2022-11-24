
/// init users ///
var users = [
    {name: 'Aaron', password: 'aaron',  ip: ''},
    {name: 'Duy',   password: 'duy',    ip: ''},
    {name: 'Bao',   password: 'bao',    ip: ''},
    {name: 'Hung',  password: 'hung',   ip: ''},
]

function isUser(loginData) {
    for(var user of users)
        if(loginData.name == user.name && loginData.password == user.password){
            return true
        }
    return false
}

function setIP(name, ip) {
    for(var user of users)
        if(name == user.name)
            user.ip = ip
}

function deleteIP(name) {
    for(var user of users)
        if(name == user.name)
            user.ip = ''
}

function handleRequest(app) {

    /// handle login ///
    app.post('/login', function(req, res) {
        var loginData = req.body
        var clientIp  = req.ip

        console.log('A new login request: ')
        console.log(loginData)
        console.log(clientIp)

        if(isUser(loginData)) {
            setIP(loginData.name, clientIp)
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

        if(!isUser(regData)) {
            users.push(regData)
            setIP(regData.name, clientIp)
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
        deleteIP(userName)
        res.json(1)
        console.log(userName + ' logged out the system!!!')
    })

    /// advertise client address to each other ///
    app.get('/:name', (req, res) => {

        requestUser = req.params.name
        
        var result = []
        for(var user of users) {
            if(user.ip && user.name != requestUser) {
                result.push({name: user.name, ip: user.ip})
            }
        }
        if(result.length != 0){
            res.json(result)
            console.log('Send ip addresses to a client')
            console.log(result)
        } else {
            res.json(0)
            console.log('No other clients are online')
        }
    })
}

module.exports = handleRequest
