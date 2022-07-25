const { password } = require('../config/user-config');

class UserController {
    constructor() {
        this.es6BindAll = require('es6bindall');
        this.es6BindAll(this,['verifyUser','createUser'])
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

    async createUser (req,resp) {
        try {
            let userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile_number: req.body.mobile_number,
                age: req.body.age,
            }

            console.log("userData", userData)
            let queryResponse = await this.userService.createUser(userData);
            if(queryResponse.status){
                resp.status(200).send({
                    status:true,
                    message: "User inserted"
                })
            } else {
                resp.status(400).send({
                    status: false,
                    message: 'Error in inserting user'
                })
            }
        } catch(err) {
            
        }
    }

    async findUser(req,resp) {
        try {
            let email = req.params.email;
            let findUser = await this.userService.findUser(email)
            if(findUser.status){
                resp.status(200).send({
                    status:true,
                    Data: findUser.data
                })
            } else {
                resp.status(400).send({
                    status: false,
                    message: 'Error in finding user'
                })
            }
        } catch (error) {
            resp.status(400).send({
                status: false,
                message: 'Error in controller while finding user'
            })
        }
    }

    async getUser(req,resp){
        try{
            let allUser = await this.userService.getAllUser()
            if(allUser.status){
                resp.status(200).send({
                    status:true,
                    Data: allUser.data
                })
            } else {
                resp.status(400).send({
                    status: false,
                    message: 'Error in finding all user'
                })
            }
        } catch(error){
            resp.status(400).send({
                status: false,
                message: 'Error in controller while finding user'
            })
        }
    }

    async deleteUser(req,resp){
        try{
            let userEmail = req.body.email
            let deletedUser = await this.userService.deleteUser(userEmail)

            if(deletedUser.status){
                resp.status(200).send({
                    status:true,
                    Data: deletedUser.data
                })
            } else {
                resp.status(400).send({
                    status: false,
                    message: 'Error in deleting user'
                })
            }
        } catch(error) {
            resp.status(400).send({
                status: false,
                message: 'Error in controller while deleting user'
            })
        }
    }

    async updateUser(req,resp){
        try{
            let userEmail = req.body.email 
            let updatedUser = await this.userService.updateUser(userEmail)

            if(updatedUser.status){
                resp.status(200).send({
                    status:true,
                    Data: updatedUser.data
                })
            } else {
                resp.status(400).send({
                    status: false,
                    message: 'Error in deleting user'
                })
            }
        } catch(error) {
            resp.status(400).send({
                status: false,
                message: 'Error in controller while deleting user'
            })
        }
    }
}

module.exports = new UserController();