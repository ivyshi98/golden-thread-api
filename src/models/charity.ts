import { Entity, model, property } from "@loopback/repository";

//model to be persisted, extend entity

@model()
export class Charity extends Entity{
    @property({
        type: 'number',
        id:true
    })
    id?: number;

    @property({
        type:'string',
        required:true
    })
    name: string;

    @property({
        type:'string',
        required:true
    })
    info: string;

    @property({
        type:'string',
    })
    logo: string;

    @property({
        type:'string',
    })
    project: string;

    getId(){
        return this.id;
    }
}