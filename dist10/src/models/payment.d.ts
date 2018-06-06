import { Entity } from "@loopback/repository";
export declare class Payment extends Entity {
    id?: number;
    name_on_card: string;
    card_number: string;
    expiry_date: string;
    date: string;
    getId(): number | undefined;
}
