
import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { get, post, requestBody, param } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";

//post - registration
//get - login 

export class UserController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository){}
    
        @get('/user')
        async getAllUsers(): Promise<Array<User>>{
          return await this.userRepo.find();
        }

        @get('/user/{id}')
        async findById(@param.path.number('id') id: number): Promise<User> {
          return await this.userRepo.findById(id);
        }
      
}



