import { Entity, model, property } from "@loopback/repository";

//model to be persisted, extend entity

@model({
    name: "payment"
})
export class Payment extends Entity{
    @property({
        type: 'number',
        id:true
    })
    id?: number;

    @property({
        type:'string',
        required:true
    })
    name_on_card: string;

    @property({
        type:'string',
        required:true
    })
    card_number: string;

    @property({
        type:'string',
        required:true
    })
    expiry_date: string;

    @property({
        type:'string',
        required:true
    })
    date: string;

    getId(){
        return this.id;
    }
}