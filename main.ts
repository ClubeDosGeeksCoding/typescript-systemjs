//Importando classe Person
import {Person} from './person.ts';

//Instanciando classe person
let person = new Person();

//Setando nome
person.name = "Jayr Alencar";

//Pegando nome e atribuindo a elemento DOM
document.getElementById("name").innerHTML = person.name;