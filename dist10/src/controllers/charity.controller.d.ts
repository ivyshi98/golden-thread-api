import { Charity } from "../models/charity";
import { CharityRepository } from "../repositories/charity.repository";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getAllCharities(): Promise<Array<Charity>>;
    findById(id: number): Promise<Charity>;
}
