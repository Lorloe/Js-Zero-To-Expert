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

const friend1 = 'Long';
const friend2 = 'Thi';
const friend3 = 'Phong';

const friends = ['Long', 'Thi', 'Phong'];
const friend = [friend1, friend2, friend3];
// console.log(friend);
console.log(friends);

console.log(friend, friend[0], ...friend)
