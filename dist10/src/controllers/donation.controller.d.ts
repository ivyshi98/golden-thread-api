import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    recordDonation(donation: Donation): Promise<Donation>;
    getDonationHistoryById(id: number): Promise<Donation>;
}
