import { Userful } from './util';

// var n : Number = 1;

// n = 'Robot'.length;

var isWinter : boolean = false;
isWinter = !(1 !== 0/1);
var names : string[] = ["Nana", "Pepe"];
enum Starks { Pepe, Nana, Kiki};

var cat : Starks = Starks.Nana;

function getName() : string {
  return "Bran";
}



// function printHame(thing) {
//     console.log(thing.name)
// }

// printHame({name: 'Nini'});
// printHame({label: 'JUju'});


// interface Stark {
//     name: string;
//     age?: number;
// }

// function printHame(stark : Stark) {
//     console.log(stark.name);
// }

// printHame({name: 'Nini'});
// printHame({name: 'JUju'});

// class Stark {
//     static costle: string = 'Winterfell'
//     name: string = 'a';
//     saying: string;
//     constructor() {
//         this.saying = "Winterfell !";
//     }
// }

// var ned = new Stark();
//  ned.saying = 'hi';
//  console.log(Stark.costle);


// class Person {
//     name: string;
//      constructor(name : string) {
//          this.name = name;
//      }

//      dance() {
//          console.log(this.name , " is danceing" )
//      }
// }

// let jiji = new Person("jiji");
// jiji.dance();

// console.log(jiji);

// class AwesomePerson extends Person {
//     dance() {
//         console.log("So ....")
//     }
// }

// var hihi = new AwesomePerson("hihi");
// hihi.dance();
/// <reference path="types.ts" />>
let use = new Userful();

console.log(use.timesTwo(5));
