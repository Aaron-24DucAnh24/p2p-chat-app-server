
class Users {
    constructor() {
        this.users = [
            {name: 'Aaron', password: 'aaron',  ip: ''},
            {name: 'Duy',   password: 'duy',    ip: ''},
            {name: 'Bao',   password: 'bao',    ip: ''},
            {name: 'Hung',  password: 'hung',   ip: ''},
        ]
    }

    isUser(loginData) {
        for(var user of this.users)
            if(loginData.name == user.name && loginData.password == user.password){
                return true
            }
        return false
    }

    getIP(name) {
        var result = []
        for(var user of this.users) 
            if(user.name != name)
                result.push({name: user.name, ip: user.ip})
        return result
    }

    setIP(name, ip) {
        for(var user of this.users)
            if(name == user.name)
                user.ip = ip
    }

    deleteIP(name) {
        for(var user of this.users)
            if(name == user.name && user.ip){
                user.ip = ''
                return true
            }
        return false
    }

    add(newUser) {
        this.users.push(newUser)
    }
}

module.exports = new Users()
