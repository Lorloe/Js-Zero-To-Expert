"use strict";
//use strict mode
let hasDriverLicense = false;
const passTess = true;

if (passTess) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive now");

//Functions: Hàm

function logger() {
  console.log("Tên tôi là Thi");
}
console.log(logger); //calling / running/ invoking function
logger(); //calling / running/ invoking function

function cpuProcessing(thread, core) {
  console.log(thread, core);
  const cpu = `CPU đang xử lý trên ${thread} luồng ${core} nhân`;
  return cpu;
}
const cpu = cpuProcessing(2, 4);
console.log(cpu);
console.log(cpuProcessing(4, 8));

// Hàm Function Declarations vs Function Expressions

// Function Declaration
function calcAge(birthday) {
  const age = 2024 - birthday;
  return age;
}
const realAge = calcAge(2002);
console.log(`Thảo: ${realAge} tuổi`);
console.log(`Thi: ${calcAge(2001)} tuổi`);

// Function Expressions
const calcYear = function (releaseYear) {
  return 2052 - releaseYear;
};
console.log(`${calcYear(2020)} năm`);

// Hàm Arrow Function
const calcMonth = (releaseMonth) => {
  return 12 - releaseMonth;
};
console.log(`${calcMonth(1)} tháng`);

const yearUntilRetirement = (birthYear, fullName) => {
  const age = 2072 - birthYear;
  const retirement = 80 - age;
  //return retirement;
  return `${fullName} retires in ${retirement} years and die at 80 years old`;
};
console.log(yearUntilRetirement(2002, "Thảo"));
console.log(yearUntilRetirement(2001, "Thi"));

//Funtion gọi function khác

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juicePieces = `juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
  //const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juicePieces;
}

console.log();
console.log(fruitProcessor(5, 7));

//Reviewing Function

const yearWork = function (workingYears) {
  return 2030 - workingYears;
};

const yearAfterBeingProgramer = (year, fullName) => {
  const age = yearWork(year);
  const retirement = 40 + age;
  if (retirement > 0) {
    //return retirement;
    return `${fullName} have worked for ${age} years in Relia Software and retire in ${retirement}`;
  } else {
    console.log(`you dead :V`);
    return age;
  }
  return age;
};
console.log(yearAfterBeingProgramer(2024, "Thi"));
console.log(yearAfterBeingProgramer(2018, "Phuc"));

//CHALLENGE 1

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);

const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  //1
  if (scoreDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins ${Dolphins} is higher than Koalas ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas ${avgKoalas} is higher than Dolphins ${avgDolphins}`);
  } else {
    console.log("No team wins");
  }

  //2
  const avg =
    avgDolphins > 2 * avgKoalas
      ? console.log(
          `AVG dolphins ${avgDolphins} is higher than AVG koalas ${avgKoalas}`
        )
      : avgKoalas > 2 * avgDolphins
      ? console.log(
          `AVG koalas ${avgKoalas} is higher than AVG dolphins ${avgDolphins}`
        )
      : console.log("No team wins");
};

checkWinner(scoreDolphins, scoreKoalas);

//Arrays

// const friend1 = "Long";
// const friend2 = "Thi";
// const friend3 = "Phong";

// const friends = ["Long", "Thi", "Phong"];
// const friend = [friend1, friend2, friend3];
// // console.log(friend);
// console.log(friends);

// console.log(friend, friend[0], ...friend);

// const years = new Array(
//   1991,
//   1992,
//   1993,
//   1994,
//   1995,
//   1996,
//   1997,
//   1998,
//   1999,
//   2000,
//   2001
// );
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friend.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Huy";
// console.log(friends);

// const firstName = "Thi";
// const Thi = [
//   firstName,
//   "Le Viet Kha",
//   2024 - 2001,
//   "Fullstack Developer",
//   friends,
// ];
// console.log(Thi);
// console.log(Thi.length);

//Exercise
const calcAges = function (birthYear) {
  return 2024 - birthYear;
};
const year = [1991, 1995, 1996, 1998, 2000, 2001];
console.log(calcAges(year[0]));

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
const age4 = calcAge(year[3]);
const age5 = calcAge(year[4]);
const age6 = calcAge(year[5]);
console.log(age1, age2, age3, age4, age5, age6);

// Basic Array Operations (Methods)
const myFriend = ["Long", "Thi", "Phong"];
// myFriend.push('Duy');
// console.log(myFriend);

const newLength = myFriend.push("Duy");
console.log(`my friend include ${[myFriend]}`, newLength);

myFriend.unshift("Huy");
console.log(myFriend);

myFriend.pop();
const popped = myFriend.pop();
console.log(popped);
console.log(myFriend);

myFriend.shift();
console.log(myFriend);

console.log(myFriend.indexOf("Thi"));
console.log(myFriend.indexOf("Minh"));

myFriend.push(13);
console.log(myFriend.includes("Long"));
console.log(myFriend.includes("Trinh"));

if (myFriend.includes("Long")) {
  console.log("You have a friend in me");
}

//CHALLENGE #2

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

//Objects

// const mineArray = [
//   "Thi",
//   "Kha",
//   2024 - 2001,
//   "Fullstack Developer",
//   ["Long", "Minh", "Phong"],
// ];

// const mine = {
//   firstName: "Thi",
//   subName: "Kha",
//   age: 2024 - 2001,
//   occupation: "Fullstack Developer",
//   friends: ["Long", "Minh", "Phong"],
// };

// console.log(mine);

//Dot
// console.log(mine.firstName);

//Bracket Notation
// console.log(mine["subName"]);

// const nameKey = "Name";
// console.log(Thi["sub" + nameKey]);
// console.log(Thi["first" + nameKey]);

//const interestedIn = prompt('What do you want to know about me? Name? Age? Job? Relationships?');

// console.log(interestedIn);
// console.log(mine[interestedIn]);

// if (mine[interestedIn]) {
//   console.log(mine[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

const lorloe = {
  firstName: "Kha",
  subName: "Lee",
  age: 2024 - 2001,
  occupation: "Fullstack Developer",
  friends: ["Long", "Minh", "Phong"],
};

lorloe.location = "VietNam";
lorloe["discord"] = "SneakyPig";
console.log(lorloe);

//Small Challenge

const jonas = {
  firstName: "Jonas",
  friends: ["Michale", "Peter", "Steven"],
  age: 2037 - 1991,
};

console.log(jonas);

const bestFriend = jonas.friends[0];

  if (jonas.friends[0] != "Michale") {
    console.log(
      `${jonnas.firstName} has ${jonas.friends.length} friends and No best friend`
    );
  } else {
    console.log(
      `${jonas.firstName} has ${jonas.friends.length} friends and Best friend of jonas is ${bestFriend}`
    );
  }

  const thanh = {
    firstName: "thanh",
    subName: "Vu",
    age: 2024 - 2001,
    occupation: "Unity Developer",
    friends: ["Thi", "Long", "Phong"],
    hasDriverLicense: true,
    birthOfYear: 2001,

    // calc: function(birthOfYear) {
    //   return 2024 - birthOfYear;
    // }

    // calc: function () {
    //   // console.log(thanh);
    //   // console.log(this);
    //   return 2024 - thanh.birthOfYear
    // }

    calc: function () {
      this.age = 2024 - this.birthOfYear;
      return this.age;
    },

    getSumary: function () {
      return `${this.firstName} is a ${this.calc()} and he is a ${this.occupation} and he has a ${this.hasDriverLicense ? "driver's license" : "no driver's license"}`;
    }
  };

  // const calc = function(birthOdYear) {
  //   return 2024 - birthOdYear;
  // }
  

console.log( thanh.calc(2001));
console.log( thanh['calc'](2001));
console.log(thanh);
console.log(thanh.age);

// Challenge
// "Thanh is a 23-year old dev unity, and he has a driver's license"
console.log(thanh.getSumary());


//CHALLENGE #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass/(this.height * this.height);
    return this.BMI;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass/(this.height * this.height);
    return this.BMI;
  }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);

if(mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}`);
}
else if(mark.BMI < john.BMI) {
  console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${mark.BMI}`);
}
else if(mark.BMI === john.BMI) {
  console.log(`${mark.fullName}'s BMI ${mark.BMI} is equal to ${john.fullName}'s BMI ${john.BMI}`);
}

// const compe = mark.calcBMI() > john.calcBMI() ? console.log(`Mark ${mark.calcBMI()} is higher than jonn ${john.calcBMI()}`) : console.log(`John ${john.calcBMI()} is higher than Mark ${mark.calcBMI()}`);


// For Loop

// console.log('I am a programmer 1');
// console.log('I am a programmer 2');
// console.log('I am a programmer 3');
// console.log('I am a programmer 4');
// console.log('I am a programmer 5');
// console.log('I am a programmer 6');
// console.log('I am a programmer 7');
// console.log('I am a programmer 8');
// console.log('I am a programmer 9');
// console.log('I am a programmer 10');

// Using a for loop to print the same message 10 times I will write i++ instead of i = i + 1
for(let i = 1; i <= 10; i++){
  // console.log( i,'I am a programmer');
  // console.log('I am a programmer', i);
  console.log(`I am a programmer ${i}`);
}

// For Looping Arrays, Breaking and Continuing

const thanhArray = [
  'Thanh',
  'Vu',
  2024 - 2001,
  'Vietnam',
  'Unity developer',
  [
    'Long', 
    'Phong', 
    'Huy'
  ],
  true
];

// const types = [i];

for(let i = 0; i <= thanhArray.length - 1 ; i++) {
  console.log(i, thanhArray[i], typeof thanhArray[i]);

//   // types[i] = typeof thanhArray[i];
}

// types[0] = 'string'

for( let excercise = 1 ; excercise < 4 ; excercise++ ) {
  console.log(`Starting excercise ${excercise}`);

  for( let rep = 1; rep < 5; rep++) {
    console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}


for(let i = 1; i <= 10; i++){
  console.log(`I am a developer ${i}`);
}

let code = 1;
while (code <= 10) {
  console.log(`While: I am a coder ${code}`);
  code++;
}

//random we give a random number from 0 to 5
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
  console.log(`you rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) {
    console.log(`you rolled a ${dice} Loop is about to end...`);
  }
}

//CHALLENGE #4

const exBills = [
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

function sumBills (arr) {
  let sumBills = 0;
  for(let b = 0; b <= exBills.length; b++){
    // console.log(exBills[b]);
    sumBills += exBills[b]; 
  }
  return sumBills;
}

console.log(exBills[arr]);

// const sum = () => {

// }

// const exTips = [

// ]

// const exTotals = [

// ]

// const calcExTip = function (exBills) {
//   return exBills <= 300 && exBills >= 50 ? exBills * 0.15 : exBills * 0.2;
// };

// const calcExAverage = (exarr) => {

// }

