import { Entity } from "@loopback/repository";
export declare class Charity extends Entity {
    id?: number;
    name: string;
    info: string;
    logo: string;
    project: string;
    getId(): number | undefined;
}
