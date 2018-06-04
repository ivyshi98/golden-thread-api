import { Entity, model, property } from "@loopback/repository";

//model to be persisted, extend entity

@model()
export class Pizza extends Entity{
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
}