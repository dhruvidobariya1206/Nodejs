class UserService {
    constructor() {
        this.userConfig = require("../config/user-config");
        this.userModel = require("../models/user");
        this.userDataModel = require("../models/user-data")
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

    async createUser(userData){
        try {
            //save method
            // let userObj = this.userModel(userData)
            // let queryResponse = await userObj.save()

            //create
            let queryResponse = await this.userModel.create(userData)

            // insert multiple user
            // let insertMultiuser = await this.userModel.insertMany(userData)
            return {
                status: true,
                data: queryResponse
            }
        }catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Error in services'
            }
        }
    }

    async findUser(userEmail){
        try{
            //findOne function: returns single document or return null if user dont exist returns in mongodb object

            let user = await this.userModel.findOne({email: userEmail}).lean()
            user['dob'] = new Date()
            // find function : return array of object(multiple document) or empty array returns in mongodb object

            //.lean() : converts mongodb object document to json format

            return {
                status:true,
                data: user
            }
        }catch(error){
            console.log(error);
            return {
                status: false,
                message: 'Error in services while finding user'
            }
        }
    }

    async getAllUser(){
        try{
            let allUsers = await this.userModel.find().lean()
            return{
                status:true,
                Data: allUsers
            }
        }catch(error){
            console.log(error);
            return {
                status: false,
                message: 'Error in services while finding all user'
            }
        }
    }

    async deleteUser(userEmail) {
        try{
            //findOneAndDelete: delete single document
            let deletedUser =  await this.userModel.findOneAndDelete({email: userEmail})
            // deleteMany: delete multiple documents

            return{
                status:true,
                Data: deletedUser
            }
        } catch(error) {
            console.log(error);
            return {
                status: false,
                message: 'Error in services while deleting user'
            }
        }
    }

    async updateUser(userData){
        try{
            //findOneandUpdate: return old data of user {options->{new:true}}, parameters: 1.query(match)
            // 2. data/fields to update
            let updatedUser = await this.userModel.findOneAndUpdate({email: userData.email},{
                $set: {
                    name: userData.name,
                    mobile_number: userData.mobile_number,
                    age: userData.age
                }
            },{new: true})
             //updateOne: update only one document,similar to findOneandUpdate

            // updateMany:

            return{
                status:true,
                Data: updatedUser
            }
        } catch(error) {
            console.log(error);
            return {
                status: false,
                message: 'Error in services while updating user'
            }
        }
    }

    async insertUserData(userData) {
        try {
            let userDataInserted = await this.userDataModel.create(userData)
            return {
                status: true,
                data: userDataInserted
            }
        }
        catch(error) {
            console.log(error);
            return {
                status: false,
                message: 'Error in services while inserting user'
            }
        }
    }

    async collectUserDataOfUser(userId) {
        try {
            let allDataOfUser = await this.userModel.aggregate([
                {
                    $match: {_id: userId}
                },
                {
                    $lookup: {
                        from: 'user-data',
                        localField: '_id',
                        foreignField: 'user_id',
                        as: 'userData'
                    },
                    
                    $project: {
                        name: 1,
                        email: 1,
                        mobile_number: 1,
                        age: 1,
                        id_card: '$userDatas.id_card',
                        roll_number: '$userDatas.roll_number'
                    }
                }
            ])

            return {
                status: true,
                data: allDataOfUser
            }
        }
        catch {
            console.log(error);
            return {
                status: false,
                message: 'Error in services while collecting all data of user'
            }
        }
    }
}

module.exports = new UserService();

//agregate function
//references or lookups ==> join in sql

// Find({})
 
//match{}
// sorting
//skip
//limit

[
    // {
    //     $match: filter
    // },
    // {
    //     $limit
    // }
]