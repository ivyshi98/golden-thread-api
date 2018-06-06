import { repository } from "@loopback/repository";
import { Donation } from "../models/donation";
import { get, post, requestBody, param } from "@loopback/rest";
import { DonationRepository } from "../repositories/donation.repository";

//post - registration
//get - login 

export class DonationController {
    constructor(
        @repository(DonationRepository.name) private donationRepo: DonationRepository){}
    
    @post('/donation')
    async recordDonation(@requestBody() donation:Donation){
        return await this.donationRepo.create(donation);
    }
 
    @get('/donation')
    async getDonationHistoryById(@param.path.number('id') id: number): Promise<Donation>{
      return await this.donationRepo.findById(id);
    }
}