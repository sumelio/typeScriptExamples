"use strict";
exports.__esModule = true;
var util_1 = require("./util");
// var n : Number = 1;
// n = 'Robot'.length;
var isWinter = false;
isWinter = !(1 !== 0 / 1);
var names = ["Nana", "Pepe"];
var Starks;
(function (Starks) {
    Starks[Starks["Pepe"] = 0] = "Pepe";
    Starks[Starks["Nana"] = 1] = "Nana";
    Starks[Starks["Kiki"] = 2] = "Kiki";
})(Starks || (Starks = {}));
;
var cat = Starks.Nana;
function getName() {
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
/// <reference path="types.ts">
var use = new util_1.Userful();
console.log(use.timesTwo(5));
