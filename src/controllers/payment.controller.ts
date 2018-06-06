import { repository } from "@loopback/repository";
import { Payment } from "../models/payment";
import { get, post, requestBody } from "@loopback/rest";
import { PaymentRepository } from "../repositories/payment.repository";

//post - registration
//get - login 

export class PaymentController {
    constructor(
        @repository(PaymentRepository.name) private paymentRepo: PaymentRepository){}
    
    @post('/payment')
    async recordPaymentInfo(@requestBody() payment:Payment){
        return await this.paymentRepo.create(payment);
    }
 
    @get('/payment')
    async getPaymentInfo(): Promise<Array<Payment>>{
      return await this.paymentRepo.find();
    }
}