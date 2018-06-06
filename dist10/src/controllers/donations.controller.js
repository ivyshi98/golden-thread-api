"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const donation_1 = require("../models/donation");
const rest_1 = require("@loopback/rest");
const donation_repository_1 = require("../repositories/donation.repository");
//post - registration
//get - login 
let DonationController = class DonationController {
    constructor(donationRepo) {
        this.donationRepo = donationRepo;
    }
    async createDonation(donation) {
        return await this.donationRepo.create(donation_1.Donation);
    }
};
__decorate([
    rest_1.post('/donation'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_1.Donation]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "createDonation", null);
DonationController = __decorate([
    __param(0, repository_1.repository(donation_repository_1.DonationRepository.name)),
    __metadata("design:paramtypes", [donation_repository_1.DonationRepository])
], DonationController);
exports.DonationController = DonationController;
//# sourceMappingURL=donations.controller.js.map