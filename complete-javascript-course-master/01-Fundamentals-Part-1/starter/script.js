let js='amazing';
      if(js === 'amazing')
        alert('javascript is fun');
        
151 + 15 + 63 - 15 - 27 + 1;
console.log(151 + 15 + 63 - 15 - 27 +1);

console.log("khathi");

console.log(24);

let fullName = "Le Viet Kha Thi";

console.log(fullName);

// Values and Variables
console.log("Le Viet Kha Thi");
console.log(23);

let firstName = "KhaThi";

console.log(firstName);

// Variable name conventions
let KhaThi = "KT";
let $function = 16;

let person = "Kha Thi";
let PI = 3.1415;

let myFirstJob = "Coder";

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'KhaThi');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 20;
age = 21;

const birthYear = 2001;
// birthYear = 2002;
// const job;

var job = 'programmer';
job = 'coder'

lastName = 'Le Viet';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
// const now = 2042;
// const ageThi = now - 2001;
// const ageThao = now - 2002;
// console.log(ageThi, ageThao);

// console.log(ageThi * 2, ageThi / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Thi';
// const lastName = 'Le Viet Kha';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageThi > ageThao); // >, <, >=, <=
// console.log(ageThao >= 18);

// const isFullAge = ageThao >= 18;

// console.log(now - 2001 > now - 2002);

// ////////////////////////////////////
// // Operator Precedence
// const now = 2024;
// const ageThi = now - 2001;
// const ageThao = now - 2002;

// console.log(now - 2001 > now - 2002);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageThi + ageThao) / 2;
// console.log(ageThi, ageThao, averageAge);

////////////////////////////////////
// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heigthJohn = 1.95;

// const BMIMark = massMark/(heightMark*heightMark);
// console.log(BMIMark);

// const BMIJohn = massJohn/(heigthJohn*heigthJohn);
// console.log(BMIJohn);

// const markHigherBMI = true;

// console.log(BMIMark > BMIJohn);
// console.log(BMIMark < BMIJohn);

////////////////////////////////////
// Strings and Template Literals
// const firstName = 'Thi';
// const job = 'programer';
// const birthYear = 2001;
// const year = 2024;

// const Thi = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(Thi);

// const ThiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(ThiNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Thi can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Thi is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

////////////////////////////////////
// Coding Challenge #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

// type conversion
// const inputYear = '2001';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Thi'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Thi'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

///////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

///////////////////////////////////
// Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Thao is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// ////////////////////////////////////
// Coding Challenge #2

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}
else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}
else if(scoreDolphins === scoreKoalas){
    console.log("It's a tie, Both win the trophy");
}

let scoreDolphin = (96 + 108 + 89)/3;
let scoreKoala = scoreDolphin > (88 + 91 + 110)/3 ? console.log("Dolphin win the trophy") : console.log("Koala win the trophy");

//////////////////////////////
// The switch statement

const day = 'Monday';

switch(day) {
    case 'Monday':
        console.log('Go to Relia Software');
        console.log('Go home');
    break;

    case 'Tuesday':
        console.log('How about go coffee today ');
        console.log('Go home');
        break;

    case 'Wednesday':
        console.log('Learn nestJs');
        console.log('Go home');
        break;
    
    case 'Thursday':
        console.log('Daily meeting with costumer');
        console.log('Go home and work');
        break;

    case 'Friday':
        console.log('Go to Relia Software');
        console.log('Have a nice break and go to restaurant with team');
        break;
    
    case 'Saturday':
        console.log('Learn Javascript');
        break;

    case 'Sunday':
        console.log('Learn Unity');
        break;

    default:
        console.log('Not a valid day');
}

//in ra valid day
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
  } else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
  } else if (day === 'friday') {
    console.log('Record videos');
  } else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
  } else {
    console.log('Not a valid day!');
  }

////////////////////////////////////
//Statement hiểu là một câu lệnh. Trong chương trình có nhiều lệnh, và cuối mỗi lệnh nên đặt dấu chấm phẩy để tách ra
//Nếu không đặt cũng không sao, thường thì JS không bắt buộc, nhưng khi bạn viết nhiều lệnh trên cùng một dòng thì nên dùng chấm phẩy tách chúng ra.
// Statements and Expressions
//3 + 4 This is an expressions
//1991 This is a value and is an expressions too
//true && false && !false This is an expression Too bởi vì cho đến cuối cùng vẫn sẽ tạo ra giá trị là true hoặc false (1 loại giá trị boolean)

if (23 > 10) {
    const str = '23 is bigger';
  }
  
  const me = 'Jonas';
  console.log(`I'm ${2037 - 1991} years old ${me}`); //${2037 - 1991} this is an expression

// nếu tôi viết như thế này

//const me = 'Thi'
//console.log(`I'm ${2024-2001} years old ${if(Thi > Thao) console.log('Thi is the best');}`); 

//lỗi về việc statement được viết trong expression

// The Conditional (Ternary) Operator 
// Toán tử 3 ngôi
// Syntax: condition ? value_if_true : value_if_false   

const drink = age > 18 ? console.log('Bạn đủ diều kiện uống rượu') : console.log('Bạn không đủ điều kiện uống rượu'); 

const drunk = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drunk);

//điều này = câu lệnh if else

let ages = 16;
let drinks;
if (ages > 18) {
    drinks = 'wine 🍷';
}
else {
    drinks = 'water 💧';
}
console.log(drinks);

// CODING CHALLENGE 3
///////////////////////////////

const bill = 175
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
