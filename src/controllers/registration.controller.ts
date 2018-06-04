import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { get, post, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";

//post - registration
//get - login 

export class RegistrationController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository){}
    
    @post('/registration')
    async createUser(@requestBody() user:User){
        return await this.userRepo.create(user);
    }
}


