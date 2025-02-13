// 1- ES6 Katı mod

//"use strict"; // Katı mod kurallar daha katı uygulanır.

// 1-2 let,const,Arrow Function
// let data1=()=>{
//     let x1=10;
//     console.log(x1);
    
//      x1=5;
//     console.log(x1);

//     const x2=10;
//     console.log(x2);
    
//     let k1=44;
//     if(3>1){
//         let k1=23;
//         console.log(k1);
//     }
// console.log(k1);
// }
// data1()

// 3-Template Literal
// let data2 = () => {
//     const name="Ozan"
//     const surname="Özder"
//     console.log(name+" "+surname+" ");
//     console.log(`${name} => ${surname}`);
    
// }
// data2();

// 4-Destructing (Array: Yıkım atama)
// let data3 = () => {
//     const array=[1,2,3,4,5];
//     const [one,two,three]=[1,2,3];
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }
// data3();

// 5-Destructing (Object: Yıkım atama)
// let data4 = () => {
//     const person={
//         name:"Ozan",
//         surname:"Özder",
//         city:"Eskişehir"

//     };
//     //1.Yol
//     console.log(person.name);
//     console.log(person.surname);
//     console.log(person.city);

//     //2.Yol
//     const {name,surname,city}=person;
//     console.log(name);
//     console.log(surname);
//     console.log(city);
// }
// data4();

// 6-REST
// let data5 = () => {
//     function sum(...temp){
//         return temp.reduce((total,n) => total+n,0);
//     }
//     let result1= sum(1,2,3,4,55,67,88,99);
//     console.log(result1);
// }
// data5();

// 7-Spread Operators
// let data6 = () => {
//     const array1=[1,2,3];
//     const array2=[4,5,6];
//     const combine=[...array1,...array2];
//     console.log(combine);
// }
// data6();

// 8-Classes
// let data7 = () => {
//     class Person{
//         //Constructor
//         constructor(name,surname){
// this.name=name;
// this.surname=surname;
//         }
//         //Function
//         data(number){
//             return `${number} sayisinin karesi => ${Math.pow(number,2)}`
//         } 
//     } //end class

//     // Class Intance
//     const resultData=new Person("Ozan","Özder")
//     console.log(resultData.name);
//     console.log(resultData.surname);
//     console.log(resultData.data(5));
//     const mathPow=resultData.data(5);
//     console.log(mathPow);
// }
// data7();

// 9-Modules
// import {add,subtract,divide,mod,multible} from "./Math.js";
// let data8 = () => {
//     console.log(add(6,8));
//     console.log(subtract(6,8));
//     console.log(divide(6,8));
//     console.log(mod(6,8));
//     console.log(multible(6,8)); 
// }
// data8();

// 10-Promises

// let data9 = () => {   
//     const admin=function(number){
//         const isLogin=true;
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(isLogin){
//                     console.log("Promise Çalişti");
//                     resolve(number)
//                 }else{
//                         reject("Hata oluştu.......")
//                 }
//             },1000)
//         }).then((response)=>{
//                 console.log("response:"+response);
//         }).then().then().then() .catch((err)=>{console.log("err",err);})  
//     }
//     admin(44);
// }
// data9();

//Examples

// function outer() {
//     var outerVar = "I'm from outer";
    
//     function inner() {
//         console.log(outerVar);
//     }
    
//     return inner; 
// }

// const closureFunction = outer(); 
// closureFunction();


// ======================================

//  JAVASCRIPT ESSENTIALS REVIEW

// function çikti(){
//     let a = 5;
//     let b = 9;
//     function carp() {
//         console.log(a * b);
//     }
//     function böl(){
//         console.log(a / b); 
//     } 
//     function setValues(newA,newB){
//         a = newA;
//         b = newB;
//     }
//     return { carp, böl , setValues};
// }
// const func = çikti();
// func.carp();
// func.böl();
// func.setValues(10,10);
// func.carp();
// func.böl();

// ======================================

// for (var i = 1; i < 10; i += 2) {
//     console.log("Tek sayilar: " + i);
// }

// let i = 1;
// const x = 10;
// while (i < x) {
//     console.log("Tek sayilar: " + i);
//     i += 2;
// } 

// const ogrenci={adi:"Ozan",soyadi:"Özder",yil:"1995"};
// console.log(ogrenci);
// ogrenci.adi="Ozzy";
// console.log(ogrenci.adi);
// ogrenci = { adi: "Audi",soyadi: "oguz",yil: "2022" }; //Hata verir

// ======================================

// const newPost = {
//     title: 'Yeni Başlık',
//     body: 'Yeni bir post içeriği',
//     userId: 1
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',  // Veriyi göndereceğimiz method
//     headers: {
//       'Content-Type': 'application/json'  // Gönderdiğimiz verinin JSON formatında olduğunu belirtir
//     },
//     body: JSON.stringify(newPost)  // JavaScript objesini JSON formatına çeviriyoruz
//   })
//     .then(response => response.json())  // Sunucudan dönen yanıtı JSON olarak alıyoruz
//     .then(data => {
//       console.log('Yeni post verisi:', data);  // Sunucudan gelen yanıtı konsola yazdırıyoruz
//     })
//     .catch(error => {
//       console.error('Hata:', error);  // Hata durumunda hata mesajı
//     });
    
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Post verisi alınamadı!');
//     }
//     return response.json();
//   })
//   .then(postData => {
//     console.log('GET ile alınan post verisi:', postData);  // Yeni post verisini konsola yazdırıyoruz
//   })
//   .catch(error => {
//     console.error('Hata:', error);  // Hata durumunda hata mesajı
//   });

//   async function asyncFonksiyon() {
//     return "Merhaba!";
//   }
  
//   console.log(asyncFonksiyon()); 

// ======================================

class MotorluArac {
  constructor(marka, model, yil, yakitTuru) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
    this.yakitTuru = yakitTuru;
  }

  bilgileriGoster() {
    console.log(`${this.yil} model ${this.marka} ${this.model} - Yakıt: ${this.yakitTuru}`);
  }
} 
class HibritArac extends MotorluArac {
  constructor(marka, model, yil, yakitTuru, bataryaKapasitesi) {
    super(marka, model, yil, yakitTuru);
    this.bataryaKapasitesi = bataryaKapasitesi;
  }

  hibritBilgisi(){
    console.log(`${this.marka} ${this.model} batarya kapasitesi: ${this.bataryaKapasitesi} kWh`);

  }
}

let toyotaPrius = new HibritArac("Toyota", "Prius", 2022, "Hibrit", 45);
toyotaPrius.bilgileriGoster();
toyotaPrius.hibritBilgisi(); 








