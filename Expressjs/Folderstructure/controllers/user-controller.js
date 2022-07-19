class UserController {
    constructor() {
        this.es6BindAll = require('es6bindall');
        this.es6BindAll(this,['verifyUser'])
        this.userService = require('../services/user-service');
    }

    async verifyUser(req,resp) {
        //fetch credentials from request object
        let userEmail = req.body.email;
        let userPassword = req.body.password;

        //pass credentials inside service function
        let serviceResponse =await this.userService.checkUserCredentials(userEmail,userPassword);
        console.log("ServiceResponse", serviceResponse)
        //send proper response to user
        let resStatus = 200
        if(serviceResponse.status != true){
            resStatus = 401
        }
        resp.status(resStatus).send(serviceResponse)
    }
}

module.exports = new UserController();