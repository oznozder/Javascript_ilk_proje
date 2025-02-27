// 1- ES5 Katı mod

//"use strict"; // Katı mod kurallar daha katı uygulanır.

// function mydata1() {
//     x=5; 
     // Katı Modda Hata Verir
//     console.log(x); 
// }
// mydata1();

 // 2- Object Methods (Nesne Metotları: Keys)
// function mydata2() {
//     const person = {name: "Cansu", age: 27, department: "Computer Engineering"};
//     const keys = Object.keys(person);
//     const value = Object.values(person);
//     console.log(keys);
//     console.log(value);
// }
// mydata2();

 // 3- Object Methods (Nesne Metotları: defineProperties)
// function mydata3() {
//     const person = {};
//     Object.defineProperty(person, "name", {
//         value: "Cansu",
//         writable: false,
//     });
//     console.log(person.name);
//     person.name = "Ozan";
     // Katı Modda Hata Verir
//     console.log(person.name);
// }
// mydata3();

// const person = {
//     firstName: "Cansu",
//     lastName: "Baysak",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

 // 4- Array Methods (Dizi Metotları: forEach)
// function arrayData() {
//     var data5 = [1, 2, 3, 4, 5,6,7,8,9];
//     return data5;
// }

// function mydata4() {
//     console.log(arrayData());
//     var data6 = arrayData();
//     data6.forEach(function(temp) {
//         console.log(temp);
//     })
// }
// mydata4();

 // 5- Array Methods (Dizi Metotları: map)

// function mydata5() {
//     var data7 = arrayData();
//     var temp = data7.map(function (temp) {
//         return temp * 2;
//     })
//     temp.forEach(function (temp) {
//         console.log(temp);
//     });
// }
// mydata5();

 // 6- Array Methods (Dizi Metotları: filter)

// function mydata6() {
//     var data8 = arrayData();
//     var temp = data8.filter(function (temp) {
//         return temp > 5;
//     }
//     )
//     temp.forEach(function (temp) {
//         console.log(temp);
//     });
// }
// mydata6();

 // 7- Array Methods (Dizi Metotları: reduce)

// function mydata7() {
//     var data9 = arrayData();
//     var sum = data9.reduce(function (total, number) {
//         return total + number;
//     }, 0);
//     console.log(sum);
// }
// mydata7();

 // 8- JSON (JavaScript Object Notation)

// function mydata8() {
//     const person = {
//         name: "Ozan",
//         surname: "Özder",
//         job: "Computer Engineer",

//     };
//     const jsonToString = JSON.stringify(person);
//     console.log(jsonToString.substring(0, 8));

//     const stringToJson = JSON.parse(jsonToString);
//     console.log(stringToJson);
//     console.log(stringToJson.name);
//     console.log(stringToJson.surname);
//     console.log(stringToJson.job);
// }
// mydata8();

 // 9- JSON (Get Set)

// function mydata9() {
//     const person = {
//         name: "Ozan",
//         surname: "Özder",
//         job: "Computer Engineer",
//         get fullName() {
//             return this.name + this.surname +" "+this.job;
//         },
//         set fullName(name) {
//             var splitData=name.split(" ");
//             this.name=splitData[0];
//             this.surname=splitData[1];
//             this.job=splitData[2];
//         }
//     };
//     console.log(person.fullName);
//     person.fullName="Cansu Baysak Computer Engineer";
//     console.log(person.name);
//     console.log(person.surname);
//     console.log(person.job);

// }
// mydata9();

 // 10- JSON (Get Set)

// function mydata10() {


//     const person = {
//         name: "Ozan",
//         surname: "Özder",
//         job: "Computer Engineer",
//         fullName:function(){
//             return this.name+" "+this.surname;
//         }
//     }
        
//     const student = {
//         name: "Cansu",
//         surname: "Özder",
//         }
//     var dataBind=person.fullName.bind(student);
//     console.log(dataBind());

//     var dataBind2=person.fullName.bind(person);
//     console.log(dataBind2());
    

// }
// mydata10();




// const member = {
//     firstName: "Cansu",
//     lastName: "Baysak"
// };
// const fullName = person.fullName.bind(member);
// console.log(fullName());


//LOCAL STORAGE

// const localStorageFunction = () => {

// localStorage.setItem("unique_name", "Cansu");
// const username=localStorage.getItem("unique_name");
// console.log(username);
 //localStorage.removeItem("unique_name");
 //localStorage.clear();


