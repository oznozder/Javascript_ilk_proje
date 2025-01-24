// 1- ES5 Katı mod
'use strict';

function mydata1() {
    var x = 10;
    console.log(x);
}
mydata1();

// 2- Object Methods
 function mydata2() {
    const person={name:"John",age:30,city:"New York"};
    const keys=Object.keys(person);
    console.log(keys);
    const values=Object.values(person);
    console.log(values);
}
mydata2();

// 3- Object Methods

function mydata3() {
    const person={};
    Object.defineProperty(person, "name", 
        {value: "John", writable: false});
    console.log(person.name);
    person.name = "Doe";
    console.log(person.name);
}
mydata3();