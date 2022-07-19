class UserService {
    constructor() {
        this.userConfig = require("../config/user-config");

    }
    
    checkUserCredentials(email, password) {
        if(email !== this.userConfig.email){
            return {
                status: false,
                message: 'Email id is not verified'
            };
        }else if(password !== this.userConfig.password) {
            return {
                status: false,
                message: 'Password id is not verified'
            };
        }else if(email === this.userConfig.email && password === this.userConfig.password) {
            return {
                status: true,
                message: 'User verified'
            };
        }else {
            return {
                status: false,
                message: 'Invalid Credentials'
            };
        }
    }
}

module.exports = new UserService();