import { repository } from "@loopback/repository";
import { Donation } from "../models/donation";
import { get, post, requestBody } from "@loopback/rest";
import { DonationRepository } from "../repositories/donation.repository";

export class DonationController {
    constructor(
        @repository(DonationRepository.name) private donationRepo: DonationRepository){}
    
        @get('/donations')
        async getDonationHistory(): Promise<Array<Donation>>{
          return await this.donationRepo.find();
        }

    @post('/donation')
    async recordDonation(@requestBody() donation: Donation){
        return await this.donationRepo.create(donation);
    }

}