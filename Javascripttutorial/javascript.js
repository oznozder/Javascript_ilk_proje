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
(function(){
    console.log("Immedia Anonymous Fonksiyon");
})();

(()=>{
    console.log("Immedia Anonymous Fonksiyon");
})();


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