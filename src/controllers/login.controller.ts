import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { get, post, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { request } from "http";
import { Login } from "../models/login";

//post - registration
//get - login 

export class LoginController {


    loginuser: User;
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository){}

        @post('/login')
        async login(@requestBody() login:Login){
            var i;
            var users = await this.userRepo.find();
            console.log(users);
            var username = login.username;
            var password = login.password;
            for(i = 0; i < users.length; i++){
                if (users[i].username == username && users[i].password == password){
                    return users[i];
                }
            }
            return 'error';
        }
}