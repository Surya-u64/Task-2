//1
let a = 20;
let b = 10;

console.log((a += b)); //30
console.log((a -= b)); //20
console.log((a /= b)); //2
console.log((a **= b)); //1024
console.log((a %= b)); //4
console.log((a *= b)); //40

//2

let a1 = 25;
let a2 = 15;
let a3 = a1 > a2;

console.log(a3); //true

//3

let b1 = 50;
let b2 = "50";

console.log(b1 == b2); //true
console.log(b1 === b2);
//false

//4

let a4 = 100;
let a5 = 200;

console.log(a4 != a5); //true
console.log(a4 !== a5);
//true

//5

let age = 21;
let res = age >= 18 ? "Eligible" : "NotEligible";

console.log(res); //ELigible

//6

console.log(20 > 10 && 30 < 50); //true

//7

console.log(10 > 20 || 50 > 30); //true

//8

console.log(!(100 > 50)); //false

//9

console.log(10 > 20 && 30 < 30 && 5 < 10); // false

//10

console.log((48 <= 34 && 44 >= 54) || 34 != 20);
// true

//11

let num1 = 23;
let ans = num1 >= 0 ? "positive" : "negative";

console.log(ans); //positive

//12

let isLoggedIn = true;

let log = isLoggedIn ? "welcome" : "Please Login";
console.log(log); //welcome

//13
let str1 = "Virat";
let str2 = "Kohli";

let str3 = str1 + " " + str2;
console.log(str3); //Virat Kohli

//14

let Name = "surya";
let Age = 25;
let city = "salem";
console.log(
  `my name is  ${Name} ,and i am ${Age} years old, and i live in ${city}.`,
); //my name is  surya ,and i am 25 years old, and i live in salem.

//15

let sub = "javaScript";
let num = 100;

let res1 = sub + num;

console.log(typeof res1);
//string

//16

let x = 100;
let y = true;
let z = x + y;
console.log(typeof z);
//number

//17

let val = 250;
let value = Number(val) + 50;
console.log(value);
//300

//18
console.log(Number(123)); //number
console.log(Number("abc")); //Nan
console.log(Number(true)); //1
console.log(Number(false));
//0
console.log(Number(null));
//0

//19
console.log(Boolean("")); //false
console.log(Boolean("Hello")); //true
console.log(Boolean(0)); //false
console.log(Boolean(1));
//true
console.log(Boolean(undefined)); //false
console.log(Boolean(null));
//false

//20

let price = "500";
console.log(Number(price) + 100);
