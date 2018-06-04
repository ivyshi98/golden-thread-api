
import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { get, post, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";

//post - registration
//get - login 

export class UserController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository){}
    
        @get('/user')
        async getAllPizzas(): Promise<Array<User>>{
          return await this.userRepo.find();
        }
}



