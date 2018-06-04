import { get, post, requestBody } from "@loopback/rest";
import { PizzaRepository } from "../repositories/pizza.repository";
import { repository } from "@loopback/repository";
import { Pizza } from "../models/pizza";


// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;


export class PizzaController {
  constructor(
    @repository(PizzaRepository.name) private pizzaRepo:PizzaRepository) {}
  
  //exposing an endpoint to a function
  //get is a HTTP method 


  //pass data into the server @get
   //retrieve data from server
  
   @post('pizzas')
   async createPizza(@requestBody() pizza:Pizza){
    return await this.pizzaRepo.create(pizza);
   }

   @get('/pizzas')
   async getAllPizzas(): Promise<Array<Pizza>>{
     return await this.pizzaRepo.find();
   }




    //controller -> repository -> pizza models 
}
