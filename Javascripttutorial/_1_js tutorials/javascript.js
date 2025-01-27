/*
Senkron Yapı

Bir işlem tamamlanmadan diğerine geçilmez.
Basit ve öngörülebilir bir yapı sağlar.
Bloklama (blocking) problemi vardır; uzun süren işlemler tüm sistemi durdurabilir.

console.log("1. işlem başlıyor");
console.log("2. işlem devam ediyor");
console.log("3. işlem tamamlandı");

A-Senkron Yapı

İşlemler birbirini beklemez; aynı anda birden fazla işlem yapılabilir.
Daha iyi kullanıcı deneyimi sağlar, çünkü sistem bloke olmaz.
Callback, Promise ve async/await yapılarıyla kullanılır.

console.log("1. işlem başlıyor");

setTimeout(() => {
    console.log("2. işlem (a-senkron) tamamlandı");
}, 2000); // 2 saniye sonra çalışır

console.log("3. işlem devam ediyor");
*/ 

// Start Code

// 1- ES5 Katı mod

//"use strict"; // Katı mod kurallar daha katı uygulanır.

function mydata1() {
    x=5; 
    // Katı Modda Hata Verir
    console.log(x); 
}
mydata1();

// 2- Object Methods (Nesne Metotları: Keys)
function mydata2() {
    const person = {name: "Cansu", age: 27, department: "Computer Engineering"};
    const keys = Object.keys(person);
    const value = Object.values(person);
    console.log(keys);
    console.log(value);
}
mydata2();

// 3- Object Methods (Nesne Metotları: defineProperties)
function mydata3() {
    const person = {};
    Object.defineProperty(person, "name", {
        value: "Cansu",
        writable: false,
    });
    console.log(person.name);
    person.name = "Ozan";
    // Katı Modda Hata Verir
    console.log(person.name);
}
mydata3();

const person = {
    firstName: "Cansu",
    lastName: "Baysak",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// 4- Array Methods (Dizi Metotları: forEach)
function arrayData() {
    var data5 = [1, 2, 3, 4, 5,6,7,8,9];
    return data5;
}

function mydata4() {
    console.log(arrayData());
    var data6 = arrayData();
    data6.forEach(function(temp) {
        console.log(temp);
    })
}
mydata4();

// 5- Array Methods (Dizi Metotları: map)

function mydata5() {
    var data7 = arrayData();
    var temp = data7.map(function (temp) {
        return temp * 2;
    })
    temp.forEach(function (temp) {
        console.log(temp);
    });
}
mydata5();

// 6- Array Methods (Dizi Metotları: filter)

function mydata6() {
    var data8 = arrayData();
    var temp = data8.filter(function (temp) {
        return temp > 5;
    }
    )
    temp.forEach(function (temp) {
        console.log(temp);
    });
}
mydata6();

// 7- Array Methods (Dizi Metotları: reduce)

function mydata7() {
    var data9 = arrayData();
    var sum = data9.reduce(function (total, number) {
        return total + number;
    }, 0);
    console.log(sum);
}
mydata7();

// 8- JSON (JavaScript Object Notation)

function mydata8() {
    const person = {
        name: "Ozan",
        surname: "Özder",
        job: "Computer Engineer",

    };
    const jsonToString = JSON.stringify(person);
    console.log(jsonToString.substring(0, 8));

    const stringToJson = JSON.parse(jsonToString);
    console.log(stringToJson);
    console.log(stringToJson.name);
    console.log(stringToJson.surname);
    console.log(stringToJson.job);
}
mydata8();

// 9- JSON (Get Set)

function mydata9() {
    const person = {
        name: "Ozan",
        surname: "Özder",
        job: "Computer Engineer",
        get fullName() {
            return this.name + this.surname +" "+this.job;
        },
        set fullName(name) {
            var splitData=name.split(" ");
            this.name=splitData[0];
            this.surname=splitData[1];
            this.job=splitData[2];
        }
    };
    console.log(person.fullName);
    person.fullName="Cansu Baysak Computer Engineer";
    console.log(person.name);
    console.log(person.surname);
    console.log(person.job);

}
mydata9();

// 10- JSON (Get Set)

function mydata10() {


    const person = {
        name: "Ozan",
        surname: "Özder",
        job: "Computer Engineer",
        fullName:function(){
            return this.name+" "+this.surname;
        }
    }
        
    const student = {
        name: "Cansu",
        surname: "Özder",
        }
    var dataBind=person.fullName.bind(student);
    console.log(dataBind());

    var dataBind2=person.fullName.bind(person);
    console.log(dataBind2());
    

}
mydata10();




const member = {
    firstName: "Cansu",
    lastName: "Baysak"
};
const fullName = person.fullName.bind(member);
console.log(fullName());


//LOCAL STORAGE

// const localStorageFunction = () => {

// localStorage.setItem("unique_name", "Cansu");
// const username=localStorage.getItem("unique_name");
// console.log(username);
 //localStorage.removeItem("unique_name");
 //localStorage.clear();



// };
// localStorageFunction();

// const greetings=() => {
//     alert("Hello World");
// };
 // EVENT HANDLER
// const parag_change=() => {  
//     alert("Hello World");
//     let parag=document.getElementById("parag_id");
//     parag.innerHTML="<b><mark>Inner HTML Değiştirdi.</mark></b>"
//     parag.innerText="<b><mark>Inner HTML Değiştirdi.</mark></b>"
//     parag.style.color="red";
//     parag.style.backgroundColor="yellow";
//     parag.style.fontSize="20px";
//     parag.style.fontFamily="Arial";
//     parag.style.textAlign="center";
//     parag.style.border="1px solid black";
//     parag.style.padding="10px";
//     parag.style.margin="10px";
//     parag.style.borderRadius="10px";
//     parag.style.boxShadow="5px 5px 5px 5px gray";
// };
 // ADD-EVENTLISTENER
// parag_id.addEventListener("click",()=>{
//     alert ("Paragraf Tıklandı");
// }

// );

//OBJECT
/*
const objectExample = () => {
    let student = {
        name: "Cansu",
        age: 27,
        department: "Computer Engineering",
        grades: [90, 80, 70],
        pass: true,
        address: {
            city: "Istanbul",
            district: "Kadikoy"
        },
        getInfo: function () {
            return `${this.name} ${this.age}`;
        }

    }
    console.log(student);
    console.log(student.name);
    console.log(student.age);
    console.log(typeof student.age);
    console.log(student.department);
    console.log(student.grades);
    console.log(student.grades[0]);
    console.log(student.grades[1]);
    console.log(student.address);
    console.log(student.address.city);
    console.log(student.address.district);
   
    const data = student.getInfo();
    console.log(data);
};
objectExample();


const instanceOfFunction = () => {

    function Hayvan(tur, yas) {
        this.tur = tur;
        this.yas = yas;
    }
    function Kopek(cins) {
        this.cins = cins;
    }
    Kopek.prototype = new Hayvan("Köpek", 2);
    let karabas = new Kopek("Karabaş");
    console.log(karabas instanceof Kopek);
    console.log(karabas instanceof Hayvan);
    console.log(karabas instanceof Object);
    console.log(karabas instanceof Array);
    console.log(karabas instanceof String);
    console.log(karabas instanceof Number);
    console.log(karabas instanceof Boolean);
    console.log(karabas instanceof Function);
}
instanceOfFunction();
*/


// Class, Constructor, This

/*
const classExample = () => {

    class Person {
        constructor(name,age) {
            this.name = name;
            this.age = age;
            
        }
         Function
        greeting() {
            console.log(`Merhaba ismim ${this.name}, ${this.age} yaşindayim.`);
        }
    }//end of class
 let persondata1 = new Person("Cansu", 27);
 persondata1.greeting();
}
classExample();
*/

// Array Operations

// let diziFunction=()=>{

//     let dizi=[1,4,3,5,6,2];
    
//     dizi.sort();
    // dizi.sort().reverse();
//     console.log(dizi);
//     console.log(typeof dizi);
//     console.log(dizi.length);
//     console.log(dizi[0]);
//     console.log(dizi[5]);
//     console.log(dizi[dizi.length-1])
//     console.log(dizi.toString().concat(" Selamlar"));
//     console.log(dizi.join(" * "));
//     console.log(dizi.fill("İstanbul",1,3));

//     let sum=0;
//     for (let i = 0; i < dizi.length; i++) {
//     sum+=dizi[i];
//     }
//     console.log(sum);

         //FOR-IN
//     for (const temp in dizi) {
// console.log(`${temp} => ${dizi[temp]}`);

//     }
//     console.log("##");

         //FORIN-OF
//         for (const temp of dizi) {
//             console.log(`${temp}`);
            
//                 }

//     dizi.push(7); //son elemanı ekler
//     dizi.unshift(0); //ilk elemanı ekler
//     dizi.pop();  //son elemanı siler
//     dizi.shift(); //ilk elemanı siler
//     let newArray = dizi.map((value) => {
//         return value * 2;
//     }).filter((value) => {
//         return value >= 3;
//     });
//     console.log(newArray);

//     dizi.forEach((value,index,array) => {
//         console.log(`${value}`);
//     });

//     let dummy1=['a','b','c'];
//     console.log(dummy1);

//     let dizi2=[1,2,3,4,5,6,7];
//     dizi2.splice(0,2);

//     dizi2.forEach((value,index,array) => {
//         console.log(`${value}`);
//     });
    
// };
// diziFunction();

// Asekron Yapı

// 1- Callback Functions

// 1.Alan

// const callBackFunction=()=>{
//     let hesapla=(x,y,callbackkk) => {
//         let result=x+y;
//         callbackkk(result);
//     };

// 2.Alan
//  let goster=(data) => {
//     console.log("Sonuç: "+data);
// };
//     hesapla(5,7,goster);
// };
//  callBackFunction();

 // Asekron Yapı

// 2- Promise Functions

// const promiseFunction = () => {
//     const myPromise = new Promise((resolve, reject) => {
//         let number = Math.floor(Math.random() * 10 + 1);
//         if (number % 2 == 0) {
//             resolve("Çift sayi geldi: " + number);
//         } else {
//             reject("Tek sayi geldi: " + number);
//         }
//     });

//     myPromise
//         .then(message => console.log(message))
//         .catch(error => console.error(error));
// };

// promiseFunction();

// 3- Async Await Functions

// const asyncFunction = () => {
//     async function myAsyncFunction() {
//         try {
//             let response = await fetch ('');
//             let result = response.json();
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// };


// Timer Functions

// SET TIME OUT
// let setTimeoutFunction=()=>{
//     setTimeout(()=> {
//         console.log("Çalişicak Set time out");
//     }, 2000); // 2 saniye sonra çalışır
// }
// setTimeoutFunction();

// SET INTERVAL
// let setIntervalFunction=()=>{
//     setInterval(()=> {
//         console.log("Sürekli Çalişicak Set Interval");
//     }, 3000); // 3 saniyede bir çalışır
// }
// setIntervalFunction();

// CONDITONAL

// let conditional1=()=>{
//     const number1=10;
//     if(number1>5){
//         console.log(number1+" sayisi 5'ten büyüktür");
//     }else{
//         console.log(number1+" sayisi 5'ten küçüktür");
//     }
// }
// conditional1(); 

// let conditional2=()=>{
//     const number1=10;

//     let result= (number1>5) ? number1+" sayisi 5'ten büyüktür" : number1+" sayisi 5'ten küçüktür";
//     console.log(result);
    
// }
// conditional2(); 

// let conditional3=()=>{
//     const number1=5;
//     if(number1==1){
//         console.log(" sayi 1'e Eşittir");
//     } if(number1==2){
//         console.log(" sayi 2'e Eşittir");
//     }
//     if(number1==3){
//         console.log(" sayi 3'e Eşittir");
//     }
//     if(number1==4){
//         console.log(" sayi 4'e Eşittir");
//     }
//     if(number1=="5"){
//         console.log(" sayi 5'e Eşittir");
//     } else {
//         console.log(" sayi 5'ten farklidir.");
//     }
// }
// conditional3();

// let conditional4=()=>{
//     const number1=6;
  // if(number1===1){
  //     console.log(" sayi 1'e Eşittir");
 // } if(number1===2){
 //     console.log(" sayi 2'e Eşittir");
 // }
 // if(number1===3){
    //     console.log(" sayi 3'e Eşittir");
    // }
  // if(number1===4){
 //     console.log(" sayi 4'e Eşittir");
 // }
 //if(number1==="5"){
//     console.log(" sayi 5'e Eşittir");
// } else {
//     console.log(" sayi 5'ten farklidir.");
 // }

//     switch(number1){
//         case 1:
//             console.log(" sayi 1'e Eşittir");
//             break;
//         case 2:
//             console.log(" sayi 2'e Eşittir");
//             break;
//         case 3:
//             console.log(" sayi 3'e Eşittir");
//             break;
//         case 4:
//             console.log(" sayi 4'e Eşittir");
//             break;
//         case 5:
//             console.log(" sayi 5'e Eşittir");
//             break;
//         default:
//             console.log(" sayi 1-5'ten farklidir.");
//             break;
//     }

// }
// conditional4();

 // FOR LOOP
// let loop1=()=>{
//     for(let i=0;i<10;i++){
//         console.log(i);
//     }
     //For (;;){}==> Sonsuz döngü
// };
// loop1();
   
 // While LOOP
// let loop2=()=>{
//     let i=0;
//     while(i<10){
//         console.log(i);
//         i++;
         //i=i+1;
         //i+=1; Aynısıdır
//     }
     //While (true){}==> Sonsuz döngü
// };
// loop2();

 // Do While LOOP
// let loop3=()=>{
//     let i=0;
//     do{
//         console.log(i);
//         i++;
//     }while(i<10);
// }
// loop3();

// Excepiton Handling
// let excepitonHandling=()=>{
//     try {
//         alerx("Pop-up")
        
//     } catch (err) {
//         console.log(err);
//         console.error(err.message);
//     }
//     finally{ 
//         console.log("port.close");
//     }
//     console.log("Son satir mutlaka görünsün.");
    // throw new Error("Hata44");
// };
// excepitonHandling();


// ÇAĞIRACAKSIN Kİ GELSİN A..Q = Acımasız Qerçekler

// FUNCTIONS
//  function type 1 : parametresiz returnsuz
// function parametresizreturnsuz(){
//     console.log("Parametresiz ve returnsuz fonksiyon");
// }
// parametresizreturnsuz();

//  function type 2 : parametreli returnsuz

// function parametrelireturnsuz(adi,soyadi,memleketi){
//     console.log("Parametreli ve returnsuz fonksiyon: "+adi+" "+soyadi+" "+memleketi);
// }
// parametrelireturnsuz("Cansu","Ozan","Ist");

//  function type 3 : parametresiz returnlu

// function parametresizreturnlu(){
//     return "Parametresiz ve returnlu fonksiyon";
// }
// console.log(parametresizreturnlu());

// const data1=parametresizreturnlu();
// console.log(data1);

//  function type 4 : parametreli returnlu

// function parametrelireturnlu(adi,soyadi,memleketi){
//     return `Parametreli Returnlu fonksiyon: ${adi} ${soyadi} ${memleketi}`;
// }

// console.log(parametrelireturnlu("Cem","Özder","Eskişehir"));

// const data4=parametrelireturnlu("Kemal","Melek","Urfa");
// console.log(data4);

// NORMAL
// function normalfunction(){
//     console.log("Normal Fonksiyon");
// }
// normalfunction();

// Anonymus Function
// const anonymusfunction = function(){
//     console.log("Anonymus Fonksiyon");
// }
// anonymusfunction();

// Arrow Function
// const arrowfunction=()=>{
//     console.log("Arrow Fonksiyon");
// }
// arrowfunction();

// Immedia Function
//(function(){
//    console.log("Immedia Anonymous Fonksiyon");
//})();

//(()=>{
//    console.log("Immedia Anonymous Fonksiyon");
//})();


// NUMERIC OPERATIONS
// let number1=55.44;
// document.writeln(number1);
// console.log(number1);
// console.log(typeof number1);
// console.log(Number(number1));
// console.log(parseInt(number1));
// console.log(parseFloat(number1));

// let normal=1300000;
// console.log(normal);

// let bilimsel=13E+5;
// console.log(bilimsel);

// let bilimsel1=13E-5;
// console.log(bilimsel1);

// EXPONENTIAL
// const number2=1453.1234;
// console.log(number2.toExponential(1));

// BINARIES
// let binary=0b01010101111;
// console.log(binary);

// OCTALS
// let octal=0o1234567;
// console.log(octal);

// HEXADEMICAL
// let hexa=0x123456789ABCDEFn;
// console.log(hexa);

// DECIMAL TO BINARY
// BINARIY (2)
// let number3=4444;
// let binary3=number3.toString(2);
// console.log(binary3);

// DECIMAL TO OCTAL
// OCTAL (8)
// let octal3=number3.toString(8);
// console.log(octal3);

// DECIMAL TO HEXADECIMAL
// HEXADECIMAL (16)
// let hexadecimal3=number3.toString(16);
// console.log(hexadecimal3);

// DECIMAL TO FIXED
// const number5=12345.6789;
// console.log(number5.toFixed(3));
// console.log(number5.toPrecision(3));


//STRING OPERATIONS

// let vocabulary=" Html5 Css3 Js React Angular Vue Html5 ";
//vocabulary=vocabulary.trim();

// vocabulary=String(vocabulary);

//vocabulary=vocabulary.toString();

// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLocaleUpperCase());
// console.log(vocabulary.toLocaleLowerCase());

// console.log(vocabulary.startsWith("H"));
// console.log(vocabulary.endsWith("e"));

// console.log(vocabulary.concat("-INC"));

// console.log(vocabulary.replace("Vue","Python"));

// console.log(vocabulary.substring(4));
// console.log(vocabulary.substring(1,3)); //1<=x<3-1

// console.log(vocabulary.indexOf("Html5"));
// console.log(vocabulary.lastIndexOf("Html5"));

// console.log(vocabulary.charAt(3));

// TYPE OF

// let varible1=44;
// console.log(typeof varible1);

// varible1=String(44);
// console.log(typeof varible1);

// varible1=true;
// console.log(typeof varible1);

// varible1=String(true);

// varible1=()=>{};
// console.log(typeof varible1);

// UNDEFINED

// let data;
// console.log(typeof data);

//  NAN

// let data1=44/22;
// console.log(data1);

// data1=44/"22";
// console.log(data1);

// data1=44/Number("22");
// console.log(data1);

// data1=44/"abs";
// console.log(data1);

// if(isNaN(data1)){
//     console.log("Lütfen sayi giriniz");
// }

//  INFINITY
// console.log(44/0);
// console.log(0/44);

//  ESCAPE CHARACTERS

// let escape1="1. alan '2. alan";
// console.log(escape1);

// escape1="1. alan \"2. alan";
// console.log(escape1);

// escape1='1. alan \'2. alan';
// console.log(escape1);

// escape1='1. alan \"2. alan';
// console.log(escape1);

// escape1="1. alan \n\t2. alan\u00A9";
// console.log(escape1);

//  NULL
// let escape2=null;
// console.log(escape2);

//OPERATORS

 //MATH
// let user3=Number(prompt("Lütfen işlem yapmak istediğiniz ilk numarayi giriniz:"))
 // Math constants
// console.log("PI: " + Math.PI); // pi sayısını getirir.
// console.log("E: " + Math.E); // Euler sayısını getirir

 // Math functions
// console.log("Mutlak: " + Math.abs(user3)); // Mutlak değerini alır
// console.log("Karekök: " + Math.sqrt(user3)); // Karekökünü alır

 // Exponential functions
// console.log("Üslü: " + Math.pow(user3, 2)); // Üs alma işlemi
// console.log("Üslü: " + (user3 ** 2)); // Üs alma işlemi (alternatif)

// Rounding functions
// console.log("Yuvarla: " + Math.round(7.3)); // En yakın tam sayıya yuvarlar
// console.log("Yuvarla: " + Math.round(7.5)); // En yakın tam sayıya yuvarlar

// console.log("Aşaği Yuvarla: " + Math.floor(8.9)); // Aşağı yuvarlar
// console.log("Yukari Yuvarla: " + Math.ceil(8.1)); // Yukarı yuvarlar

 // Random number generation
// console.log("Rastgele sayi: " + Math.random() * 10); // 0 ile 10 arasında rastgele bir sayı üretir
// console.log("Rastgele sayi: " + Math.floor(Math.random()*10+1)); // 0 ile 10 arasında rastgele bir "Tam" sayı üretir.

// Trigonometric functions
// console.log("Sin: " + Math.sin(user3 * Math.PI / 180)); // Dereceyi radyana çevirip sinüsünü alır

// let number1=11;
// let number2=2;
// let number3=2,number4=12;
// console.log(number1 + number2); // number1 ve number2'nin toplamını yazdırır
// console.log(number1 - number2); // number1 ve number2'nin farkını yazdırır
// console.log(number1 / number2); // number1'in number2'ye bölümünü yazdırır
// console.log(number1 * number2); // number1 ve number2'nin çarpımını yazdırır
// console.log(number1 % number2); // number1'in number2'ye bölümünden kalanını yazdırır (Modulus)
// console.log(number1 ** number2); // number1'in number2 kuvvetini yazdırır (Exponentiation)

//GETTING DATA FROM USER
// let user1=Number(prompt("Lütfen işlem yapmak istediğiniz ilk numarayi giriniz:")) 
// let user2=parseInt(prompt("Lütfen işlem yapmak istediğiniz ikinci numarayi giriniz:")) 

// console.log(user1 + user2); // number1 ve number2'nin toplamını yazdırır
// console.log(user1 - user2); // number1 ve number2'nin farkını yazdırır
// console.log(user1 / user2); // number1'in number2'ye bölümünü yazdırır
// console.log(user1 * user2); // number1 ve number2'nin çarpımını yazdırır
// console.log(user1 % user2); // number1'in number2'ye bölümünden kalanını yazdırır (Modulus)
// console.log(user1 ** user2); // number1'in number2 kuvvetini yazdırır (Exponentiation)


 //Hoisting
// kelime666="Kelime toptancisi";
// var kelime666;
// console.log(kelime666);
// console.log(typeof kelime666);

 // VAR GLOBAL STATE START
// var kelime="Js Tutorial";
// console.log(kelime);
// console.log(typeof kelime);

// var sayi=619;
// console.log(sayi);
// console.log(typeof sayi);

// var sayi=41965.651;
// console.log(sayi);
// console.log(typeof sayi);

// var boolen=false;
// console.log(boolen);
// console.log(typeof boolen);

// var obje=["Ali"+27];
// console.log(obje);
// console.log(typeof obje);
 // VAR GLOBAL STATE END

 //LET
// let kelime2="Cansu";
// console.log(kelime2);

// let kelime3="Ozan";
// console.log(kelime3);

 //CONST
// const kelime4="Cem";
// console.log(kelime2);

// const kelime5="Kemal";
// console.log(kelime5);



//LOG
//console.log("Console.log");

//Warn
//console.warn("Warning");

//Info
//console.info("Info");

//Error
// console.error("Error");

//alert("External js")
//window.alert("External js")

// End Code