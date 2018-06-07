import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    getDonationHistory(): Promise<Array<Donation>>;
    recordDonation(donation: Donation): Promise<Donation>;
}
