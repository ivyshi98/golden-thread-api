import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { User } from '../models/user';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    //connect model to datasource 
    //super: invoking DefaultCrudRepository 
    super(User, datasource);
  }
}

// Example of using super 
// class Animal {
//    constructor(species: string){

//   }
//  }

// //create different instances of the animal class 
// //Method 1 
// var dog = new Animal ("dog");

// //extend animal class 
// //same as creating an new object
// //Extend class when you want to give addtional property to animal 
// //Method 2 
// class Dog extends Animal {
//   constructor(){
//     //super = parent.constructor 
//     super("dog");
//   }
// }
// var doggy = new Dog();