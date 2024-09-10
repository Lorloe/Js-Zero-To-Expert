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

//Chủ đề 1: Cơ bản
// Kích thước hình vuông
const canh = 5;
const chuViHv = canh * 4;
const dienTichHv = canh * canh;
console.log(chuViHv);
console.log(dienTichHv);

// Kích thước hình chữ nhật
const dai = 7;
const rong = 3;
const chuViHcn = (dai + rong) * 2;
const dienTichHcn = dai * rong;
console.log(chuViHcn);
console.log(dienTichHcn);
// Tổng n + nn + nnn
let n = 8;
let nn = 18;
let nnn = 101;
console.log(n + nn + nnn);

// Số ngẫu nhiên(Làm tròn số): 
// https://viblo.asia/p/javascript-mathrandom-co-thuc-su-la-random-63vKj9N652R
// https://anonystick.com/blog-developer/tips-mathrandom-in-javascript-2020042458103007

console.log(Math.random()); //random giữa 0 và 1 số thực
console.log(Math.random() * 10) //random giữa 0 và 10 số thực

// Hàm toán học
let a = 15;
let b = 8;
const ketQuaCong = a + b;
const ketQuaTru = a - b;
const ketQuaNhan = a * b;
const ketQuaChiaLayDu = a / b;
const ketQuaChialayNguyen = a % b;
console.log(ketQuaCong);
console.log(ketQuaTru);
console.log(ketQuaNhan);
console.log(ketQuaChiaLayDu);
console.log(ketQuaChialayNguyen);

// Điểm số trung bình
let diemToan =  8.4;
let diemVan =  7.8;
let diemAnh = 9.1;
const diemTrungBinhHK = (diemToan + diemVan + diemAnh) / 3;
const diemTrungBinhTatCaHK = (diemToan * 2 + diemVan * 2 + diemAnh) / 5 ;
console.log(diemTrungBinhHK);
console.log(diemTrungBinhTatCaHK);

// Số lớn nhất trong 3 số
// https://anonystick.com/blog-developer/tim-gia-tri-max-trong-array-of-objects-hoc-javascript-thuc-chien-2022082634298808
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/mang-trong-javascript/tim-max-va-min-trong-mang-javascript/

const diem = [
  {name: 'Thi', diem: 10 },
  {name: 'Thanh', diem: 9 },
  {name: 'Dat', dime: 5 },
  {name: 'Bao', diem: 7 },
  {name: 'Bu', diem: 4.5 },
  {name: 'Longct', diem: 8 },
  {name: 'Manh', diem: 6 },
  {name: 'LongBeo', diem: 5 }
];
// 1: tìm số lớn nhất
//Dùng forEach 
let max = 0;
diem.forEach((user) => {
  if (user.diem > max) {
    max = user.diem;
  }
});

console.log(`diem cao nhat: ${max}`);
// 2: tìm số nhỏ nhất
let min = 0;
diem.forEach((user) => {
  if (user.diem < min) {
    min = user.diem;
  }
});
// 3: tìm số thứ 3
// 4: tìm số thứ 5


//Chủ đề 2: Câu điều kiện

// Số nguyên âm dương, chẵn lẻ
//nguyên âm/dương
const soNgauNhienAmDuong = 12;
if(soNgauNhienAmDuong > 0) {
  console.log(`${soNgauNhienAmDuong} là số dương`);
}
else {
  console.log(`${soNgauNhienAmDuong} là số âm`);
}

//chẵn lẻ
const soNgauNhienChanLe = 18;
if(soNgauNhienChanLe % 2 === 0) {
  console.log(`${soNgauNhienChanLe} là số chẵn`);
}
else {
  console.log(`${soNgauNhienChanLe} là số lẻ`);
}

//nguyên âm/dương, chẵn/lẻ
const soNgauNhien = 7;
if(soNgauNhien > 0 && soNgauNhien % 2 === 0) {
  console.log(`${soNgauNhien} là số nguyên dương chẵn`);
}
else if(soNgauNhien > 0 && soNgauNhien % 2 !== 0) {
  console.log(`${soNgauNhien} là số nguyên dương lẻ`);
}
else if(soNgauNhien < 0 && soNgauNhien % 2 === 0) {
  console.log(`${soNgauNhien} là số nguyên âm chẵn`);
}
else if(soNgauNhien < 0 && soNgauNhien % 2 !== 0) {
  console.log(`${soNgauNhien} là số nguyên âm lẻ`);
}

// Năm nhuận

const nam2024 = 365;
if(nam2024 === 366) {
  console.log(`năm nay là năm nhuận: ${nam2024}`);
}
else {
  console.log(`năm nay không phải năm nhuận: ${nam2024}`);
}

// Số ngày trong tháng

// Phim thế giới lập trình

// Máy tính đơn giản

// Thu nhập của lập trình viên

// Doanh số bán hàng

//Chủ đề 3: Vòng lặp
// Tính tổng các số từ 1 đến n
// số lẻ

// số chẵn

// số thực

// Bảng cửu chương

// Dãy số chẵn

// Số chia hết cho 13

// Số nguyên tố

// Đếm số chữ số

// Tổng các chữ số

// Số toàn chẵn

// Số tiến

//Chủ đề 4: Dãy số
// Tổng F(n) = 1 + 2 + … + n

// Tích F(n) = n x … x 2 x 1

// Tổng tích F(n) = 1 + 1x2 + … + 1x2x…xn

// Tổng bình phương F(n) = 1^2 + 2^2 + … + n^2

// Tổng S(n) = n^2 + n^4 + … + n^2x

// 1 ít bài tập bổ sung

//Chủ đề 5: Ước số và bội số
//Bội số

//Ước số

//Xác định tồn tại ước số

//Xác định tồn tại bội số

//Ước chung lớn nhất

//Bội chung nhỏ nhất

//Ước và bội chung

//Thống kê ước số chẵn

//Ước lẻ lớn nhất

//Chủ đề 6: Tháp hình
// Tháp hình tam giác cơ bản

// Tháp hình tam giác dạng số

// Tháp hình tam giác chẵn lẻ

// Tháp hình tam giác số ngược

// Tháp hình tam giác vuông phải

// Tháp hình tam giác số ngược phải

// Tháp hộp hai nửa tam giác đối xứng

// Tháp hình hộp hai nửa tam giác đối xứng

// Tháp hình hộp hai nửa tam giác đối xứng nghịch

// Tháp hình tam giác cân số đối xứng

// Tháp hình hộp chứa tam giác số đối xứng

// Tháp hình hộp chứa tam giác số tăng dần

// Tháp hình chữ Z

// Tháp hình đồng hồ cát

// Tháp hình hộp X

// Tháp hình số tăng dần

// Tháp hình hộp rỗng

// Tháp hình tam giác dạng đường chéo số

// Tháp hình Slash

// Tháp hình mũ

// Tháp hình tam giác vuông hai chữ số

// Tháp hình thoi

// Tháp hình cây thông Noel

//Chủ đề 7: Sim điện thoại
// Sim tứ quý

// Sim ông địa

// Sim thần tài

// Sim tiến lên đơn

// Sim ngũ quý

// Sim lục quý

//Chủ đề 8: Array: Mảng
// Tổng và tổng chẵn lẻ

// Số lớn nhất trong mảng

// Mảng số đối xứng

// Trung bình cộng các số chẵn ở vị trí lẻ

// Phần tử tồn tại trong mảng

// Phần tử là tổng 2 phần tử đứng kế

// Kiểm tra mảng tăng dần

// Thay thế phần tử bằng trị tuyệt đối

// Thay thế phần tử bằng giá trị lớn nhất

// Sinh viên có điểm cao nhất

// Loại bỏ các phần tử âm

//Chủ đề 9: String: Chuỗi
// Chuỗi chứa số

// Đếm số từ trong chuỗi

// Chuẩn hóa chuỗi

// Lọc số điện thoại

// Chuyển nghịch hoa thường

// Đường dẫn tập tin đơn giản

// Phân tách chuỗi cơ bản

// Trích xuất chuỗi theo điều kiện

// Breadcrumb

// Phân tách chuỗi nâng cao

//Chủ đề 10: Tổng hợp
// Thống kê ID

// Trung bình cộng loại trừ max và min trong mảng

// Phần tử lớn nhất và lớn nhì

// Giải mã chuỗi sang thời gian

// Vị trí xuất hiện của từ

// Chuyển mảng thành chuỗi tăng dần

// Giải mã chuỗi sang tên

// Giải mã chuỗi sang mật thư dần

// Chuyển số có 3 chữ số thành chữ

// Tổng các chữ số

// Sức mạnh của chuỗi

// Khóa học dài nhất

// Khóa học dài nhất nâng cao

// Điểm thi cao nhất

// Thống kê khóa học

1
let i = 100;
while (i <= 200){
  console.log(i)
  i += 20
}




