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
const rest_1 = require("@loopback/rest");
const charity_repository_1 = require("../repositories/charity.repository");
//post - registration
//get - login 
let CharityController = class CharityController {
    constructor(charityRepo) {
        this.charityRepo = charityRepo;
    }
    async getAllCharities() {
        return await this.charityRepo.find();
    }
    async findById(id) {
        let idExists = !!(await this.charityRepo.count({ id }));
        if (!idExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
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
    async getProjectsByCharityId(id) {
        console.log(id);
    }
    async getDonationsByCharityId(id, dateFrom) {
        //var userchosen = await this.userRepo.findById(id);
        //return userchosen.donations;
        console.log(id);
        console.log(dateFrom);
        //var userchosen = this.userRepo.findById(id);
        //return userchosen;
    }
};
__decorate([
    rest_1.get('/charity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getAllCharities", null);
__decorate([
    rest_1.get('/charity/{id}') //:id
    ,
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findById", null);
__decorate([
    rest_1.get('/charity/{id}/projects'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getProjectsByCharityId", null);
__decorate([
    rest_1.get('/charity/{id}/donations'),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.date('date_from')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getDonationsByCharityId", null);
CharityController = __decorate([
    __param(0, repository_1.repository(charity_repository_1.CharityRepository.name)),
    __metadata("design:paramtypes", [charity_repository_1.CharityRepository])
], CharityController);
exports.CharityController = CharityController;
//# sourceMappingURL=charity.controller.js.map