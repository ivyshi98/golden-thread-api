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
const user_repository_1 = require("../repositories/user.repository");
//post - registration
//get - login 
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getAllUsers() {
        return await this.userRepo.find();
    }
    async findById(id) {
        return await this.userRepo.findById(id);
    }
    async getDonationsByUserId(id, dateFrom) {
        //var userchosen = await this.userRepo.findById(id);
        //return userchosen.donations;
        console.log(id);
        console.log(dateFrom);
        //var userchosen = this.userRepo.findById(id);
        //return userchosen;
    }
};
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    rest_1.get('/users/{id}/donations'),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.date('date_from')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDonationsByUserId", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map