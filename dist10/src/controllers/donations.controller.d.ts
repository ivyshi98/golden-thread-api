import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    createDonation(donation: Donation): Promise<Donation>;
}
