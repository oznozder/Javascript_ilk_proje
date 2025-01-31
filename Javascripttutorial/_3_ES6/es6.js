// 1- ES6 Katı mod

//"use strict"; // Katı mod kurallar daha katı uygulanır.

// 1-2 let,const,Arrow Function
let data1=()=>{
    let x1=10;
    console.log(x1);
    
     x1=5;
    console.log(x1);

    const x2=10;
    console.log(x2);
    
    let k1=44;
    if(3>1){
        let k1=23;
        console.log(k1);
    }
console.log(k1);
}
data1()

// 3-Template Literal
let data2 = () => {
    const name="Ozan"
    const surname="Özder"
    console.log(name+" "+surname+" ");
    console.log(`${name} => ${surname}`);
    
}
data2();

// 4-Destructing (Array: Yıkım atama)
let data3 = () => {
    const array=[1,2,3,4,5];
    const [one,two,three]=[1,2,3];
    console.log(one);
    console.log(two);
    console.log(three);
}
data3();

// 5-Destructing (Object: Yıkım atama)
let data4 = () => {
    const person={
        name:"Ozan",
        surname:"Özder",
        city:"Eskişehir"

    };
    //1.Yol
    console.log(person.name);
    console.log(person.surname);
    console.log(person.city);

    //2.Yol
    const {name,surname,city}=person;
    console.log(name);
    console.log(surname);
    console.log(city);
}
data4();

// 6-REST
let data5 = () => {
    function sum(...temp){
        return temp.reduce((total,n) => total+n,0);
    }
    let result1= sum(1,2,3,4,55,67,88,99);
    console.log(result1);
}
data5();

// 7-Spread Operators
let data6 = () => {
    const array1=[1,2,3];
    const array2=[4,5,6];
    const combine=[...array1,...array2];
    console.log(combine);
}
data6();

// 8-Classes
let data7 = () => {
    class Person{
        //Constructor
        constructor(name,surname){
this.name=name;
this.surname=surname;
        }
        //Function
        data(number){
            return `${number} sayisinin karesi => ${Math.pow(number,2)}`
        } 
    } //end class

    // Class Intance
    const resultData=new Person("Ozan","Özder")
    console.log(resultData.name);
    console.log(resultData.surname);
    console.log(resultData.data(5));
    const mathPow=resultData.data(5);
    console.log(mathPow);
}
data7();

// 9-Modules
import {add,subtract,divide,mod,multible} from "./Math.js";
let data8 = () => {
    console.log(add(6,8));
    console.log(subtract(6,8));
    console.log(divide(6,8));
    console.log(mod(6,8));
    console.log(multible(6,8)); 
}
data8();

// 10-Promises

let data9 = () => {   
    const admin=function(number){
        const isLogin=true;
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(isLogin){
                    console.log("Promise Çalişti");
                    resolve(number)
                }else{
                        reject("Hata oluştu.......")
                }
            },1000)
        }).then((response)=>{
                console.log("response:"+response);
        }).then().then().then() .catch((err)=>{console.log("err",err);})  
    }
    admin(44);
}
data9();
