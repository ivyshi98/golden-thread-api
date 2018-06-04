import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { Login } from "../models/login";
export declare class LoginController {
    private userRepo;
    loginuser: User;
    constructor(userRepo: UserRepository);
    login(login: Login): Promise<"error" | User>;
}
