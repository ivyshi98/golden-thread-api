
import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { get, post, requestBody, param } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";

//post - registration
//get - login 

export class UserController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository){}
    
        @get('/users')
        async getAllUsers(): Promise<Array<User>>{
          return await this.userRepo.find();
        }

        @get('/users/{id}')
        async findById(@param.path.number('id') id: number): Promise<User> {
          return await this.userRepo.findById(id);
        }

        @get('/users/{id}/donations') async getDonationsByUserId(
          @param.path.number('id') id: number, 
          @param.query.date('date_from') dateFrom: Date
          )//:Promise<User>
          {
            //var userchosen = await this.userRepo.findById(id);
            //return userchosen.donations;
            console.log(id);
            console.log(dateFrom);
            //var userchosen = this.userRepo.findById(id);
            //return userchosen;
          }

          @get('/charities/{id}/donations') async getDonationsByCharityId(
            @param.path.number('id') id: number, 
            @param.query.date('date_from') dateFrom: Date
            )//:Promise<User>
            {
              //var userchosen = await this.userRepo.findById(id);
              //return userchosen.donations;
              console.log(id);
              console.log(dateFrom);
              //var userchosen = this.userRepo.findById(id);
              //return userchosen;
            }
      
}



