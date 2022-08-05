const { password } = require('../config/user-config');

class UserController {
    constructor() {
        this.es6BindAll = require('es6bindall');
        this.es6BindAll(this,['createUser'])
        this.userService = require('../services/user-service');
        this.mongoose = require('mongoose')
    }

    async createUser (req,resp) {
        try {
            let userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
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
            let email = req.body.email;
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
                    Data: allUser.data,
                    message: 'found users'
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

//     async updateUser(req,resp){
//         try{
//             let userEmail = req.body.email 
//             let updatedUser = await this.userService.updateUser(userEmail)

//             if(updatedUser.status){
//                 resp.status(200).send({
//                     status:true,
//                     Data: updatedUser.data
//                 })
//             } else {
//                 resp.status(400).send({
//                     status: false,
//                     message: 'Error in deleting user'
//                 })
//             }
//         } catch(error) {
//             resp.status(400).send({
//                 status: false,
//                 message: 'Error in controller while deleting user'
//             })
//         }
//     }

//     async insertUserData(req,resp) {
//         try {
//             let userData = {
//                 name: this.mongoose.Types.ObjectId(req.body.user_id),
//                 id_card: req.body.id_card,
//                 roll_number: req.body.roll_number
//             }

//             console.log("userData", userData)
//             let queryResponse = await this.userService.insertUserData(userData);
//             if(queryResponse.status){
//                 resp.status(200).send({
//                     status:true,
//                     message: "User inserted"
//                 })
//             } else {
//                 resp.status(400).send({
//                     status: false,
//                     message: 'Error in inserting user'
//                 })
//             }
//         } catch(err) {
//             resp.status(400).send({
//                 status: false,
//                 message: 'Error in controller while inserting user data'
//             })
//         }
//     }

//     async collectUserData(req,resp) {
//         try {
//             let userId = req.params.id_card
//             let queryResponse = await this.userService.collectUserDataOfUser(userId)

//             if(queryResponse.status){
//                 resp.status(200).send({
//                     status:true,
//                     message: "User data collected"
//                 })
//             } else {
//                 resp.status(400).send({
//                     status: false,
//                     message: 'Error in collecting all data of user'
//                 })
//             }
//         } catch(err) {
//             resp.status(400).send({
//                 status: false,
//                 message: 'Error in controller while collecting all data of user'
//             })
//         }
//     }
}

module.exports = new UserController();