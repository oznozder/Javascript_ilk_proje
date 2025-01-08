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

//Hoisting
kelime666="Kelime toptancisi";
var kelime666;
console.log(kelime666);
console.log(typeof kelime666);

// VAR GLOBAL STATE START
var kelime="Js Tutorial";
console.log(kelime);
console.log(typeof kelime);

var sayi=619;
console.log(sayi);
console.log(typeof sayi);

var sayi=41965.651;
console.log(sayi);
console.log(typeof sayi);

var boolen=false;
console.log(boolen);
console.log(typeof boolen);

var obje=["Ali"+27];
console.log(obje);
console.log(typeof obje);
// VAR GLOBAL STATE END

//LET
let kelime2="Cansu";
console.log(kelime2);

let kelime3="Ozan";
console.log(kelime3);

//CONST
const kelime4="Cem";
console.log(kelime2);

const kelime5="Kemal";
console.log(kelime5);



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