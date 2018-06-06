import { Entity } from "@loopback/repository";
export declare class Donation extends Entity {
    id?: number;
    charity_id: number;
    user_id: number;
    payment_id: number;
    amount: number;
    date: string;
    getId(): number | undefined;
}
