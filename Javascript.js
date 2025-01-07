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
<p>Hello world!!!!</p>