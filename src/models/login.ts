import { Entity, model, property } from "@loopback/repository";

//model to be persisted, extend entity

@model()
export class Login extends Entity{
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
}