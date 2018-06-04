import { Entity, model, property } from "@loopback/repository";

//model to be persisted, extend entity

@model()
export class User extends Entity{
    @property({
        type: 'number',
        id:true
    })
    id?: number;

    @property({
        type:'string',
        required:true
    })
    username: string;

    @property({
        type:'string',
        required:true
    })
    password: string;

    getId(){
        return this.id;
    }
}