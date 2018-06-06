import { Payment } from "../models/payment";
import { PaymentRepository } from "../repositories/payment.repository";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    recordPaymentInfo(payment: Payment): Promise<Payment>;
    getPaymentInfo(): Promise<Array<Payment>>;
}
