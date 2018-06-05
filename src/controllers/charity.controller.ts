import { repository } from "@loopback/repository";
import { Charity } from "../models/charity";
import { get, post, requestBody, param, HttpErrors } from "@loopback/rest";
import { CharityRepository } from "../repositories/charity.repository";

//post - registration
//get - login 

export class CharityController {
    constructor(
        @repository(CharityRepository.name) private charityRepo: CharityRepository){}
    
    @get('/charity')
    async getAllCharities(): Promise<Array<Charity>>{
        return await this.charityRepo.find();
    }

    @get('/charity/{id}') //:id
        async findById(@param.path.number('id') id: number): Promise<Charity> {
          return await this.charityRepo.findById(id);
        }
    // @get('/charity/{id}/project') 
    //     async findByProject(@param.path.number('id') id:number): Promise<Charity>{
    //         if (!project){
    //             throw new HttpErrors.Unauthorized('invalid credentials');
    //         }
    //         var charities = await this.charityRepo.find();
    //         var charitiesproject = project;
            
    //     }
}