const userRepo = require('../Repositories/userRepository');
const userApiRepo = require('../Repositories/userAuthRepository');
const SECRET_KEY = 'secret-key';
const jwt = require('jsonwebtoken');


const findUserInSystem = async(username,email) =>{

    const {data: allUsers} =await userApiRepo.getAllUsers()
    const user = allUsers.find(u => u.username === username && u.email === email);
    const allUsersInDB= await userRepo.getAllUsers();
    
    if (user){
        const userInDB= allUsersInDB.find(u=>u.Name===username)
        if (userInDB){
            const userID = userInDB._id;
            const token = jwt.sign(
                        { id: userID },
                        SECRET_KEY); 
            return token;
        }
        else {
            return userInDB;
        }

    }
    else {
        return user;
    }

}
module.exports={
    findUserInSystem
}