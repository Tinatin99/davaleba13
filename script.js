// მთავარ კონტენტზე გადასვლა
// Google Classroom
// Classroom
// BTU- Mentorship program
// Front-End Development
// 13 ლექცია
// Nino Sopoian
// •
// 23 სექ (რედაქტირების დრო: 23 სექ)
// js კოდის გაშვებისთვის 

// Code Runner - ექსტენშენი დააყენე და შემდეგ vs code ში 

// File > Preferences > Keyboard Shortcuts 
//  მოძებნე Run Cod ეს ტექსტი და  მერე შეცვალე შენთვის სასურველ ღილაკების კომბინაციაზე. ყურადღება მიაქციე რომ არ დაემთხვეს სხვა  კომბინაციას. არ დააყენო ისეთი რომელსაც იყენებ ხოლმე ხშირად სხვა რამეში.

// script.js
// JavaScript

// Screenshot 2025-09-23 122451.png
// სურათი

// Screenshot 2025-09-23 122735.png
// სურათი
// კლასის კომენტარები

// კლასზე კომენტარის დამატება…

//სავარჯიშო რესტორანში –  ვინ გადაიხდის ?+
// უნდა დაწეროთ ფუნქცია, რომელიც შემთხვევით აირჩევს სახელს სიიდან.
// რომელმაც უნდა გადაიხდის მთლიანი ჩეკი ლანჩის.
// ფუნქციამ უნდა დააბრუნოს შედეგი  Michael is going to buy lunch today!
//––––––––––––––––––––––––––––––––––––––––––––––––
// let friends = ["Anna", "Ben", "Jenny", "Michael", "Chloe"];

// function payCheck() {
//   let rendomNum = Math.floor(Math.random() * friends.length);
//   return `${friends[rendomNum]} is going to buy lunch today!`;
// }

// console.log(payCheck());


let friends = ["Anna", "Ben", "Jenny", "Michael", "Chloe"];

function payCheck() {
  let randomNum = Math.floor(Math.random() * friends.length); // სწორად randomNum
  return `${friends[randomNum]} is going to buy lunch today!`;
}

console.log(payCheck());

//–––––––––––––––––––––––––––––––––––––––––––
// for loop
// როდესაც ერთი და იგივე მოქმედებას ბევრჯერ ვიმეორებთ, ვიყენებთ ციკლს
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for ციკლის სტრუქტურა

// for (initialization; condition; increment) {
//   // კოდი, რომელიც იმუშავებს ყოველ იტერაციაზე
// }

// initialization (გამოცხადება): ცვლადის შექმნა და საწყისი მნიშვნელობის მინიჭება (მაგ.: let i = 0;).

// condition (პირობა): სანამ პირობა მართალია (true), ციკლი მუშაობს. (მაგ.: i < 5).

// increment (განახლება): ყოველ იტერაციის შემდეგ ცვლადის შეცვლა (მაგ.: i++).

// for (let i = 1; i <= 7; i++) {
//   console.log(i);
// }

// while ციკლი
// let count = 1;
// while (count <= 3) {
//   console.log("Hi" + count);
//   count++;
// }

// for...of ციკლი

// const numbers = [10, 20, 30];
// for (let item of numbers) {
//   console.log(item);
// }

////////////////////////////////
//  სავარჯიშო/
// დაბეჭდე 1-დან 10-მდე რიცხვები for ციკლით.

// დაითვალე 1-დან 20-მდე რიცხვებში რამდენია ლუწი და რამდენი კენტი.

// დაბეჭდე array-ის ყველა ელემენტი for...of ციკლით.

// while ციკლით შეავსე ცარიელი array რიცხვებით 1-დან 5-მდე.

// Array-ის მნიშვნელოვანი მეთოდები (30 წთ);

// 1. .map()

// ქმნის ახალ array-ს, სადაც თითოეული ელემენტი იცვლება შენი ლოგიკით.

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]

// სავარჯიშო:

// შექმენი array და თითოეული ელემენტი გაამრავლე 3-ზე map-ის გამოყენებით.

// 2. .filter()

// აბრუნებს მხოლოდ იმ ელემენტებს, რომლებიც აკმაყოფილებენ პირობას.

// const ages = [12, 18, 25, 30];
// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 25, 30]

// სავარჯიშო:

// შექმენი array და დატოვე მხოლოდ ლუწი რიცხვები.

// 3. .sort()

// ალაგებს ელემენტებს.

// სტრინგების სორტირება:

// const letters = ['b', 'a', 'c'];
// letters.sort();
// console.log(letters); // ['a', 'b', 'c']

// რიცხვების სორტირება:

// const nums = [40, 5, 20, 10];
// nums.sort((a, b) => a - b);
// console.log(nums); // [5, 10, 20, 40]

// სავარჯიშო:

// დაასორტირე array ზრდადობით და კლებადობით.

// Map vs Filter vs Sort შედარება

// მინი პროექტი:

// ამოცანა:
// მოცემულია მომხმარებლების ასაკი:

// const ages = [15, 22, 18, 30, 12, 25];

// გააკეთე:

// filter – მხოლოდ 18+ ასაკის.

// map – თითოეულს დაამატე „Age: “ ტექსტი.

// sort – დაალაგე ზრდადობით.

// IV. Objects
// 1. რა არის ობიექტი

// ობიექტი არის მონაცემების შენახვის სტრუქტურა key: value წყვილებით.

// მაგალითი:

// const person = {
//   name: 'Alice',
//   age: 25
// };

// console.log(person.name); // Alice
// console.log(person['age']); // 25

// 2. ობიექტის თვისებები iteration (for...in)
// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Tbilisi",
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// 3. Array of Objects
// const users = [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 30 },
//   { name: "David", age: 17 },
// ];

// // filter მაგალითი:

// const adults = users.filter((user) => user.age >= 18);
// console.log(adults);

// Objects სავარჯიშოები

// შექმენი ობიექტი car (brand, model, year). დალოგე ყველა მნიშვნელობა.

// გამოიყენე for...in ობიექტის გასავლელად.

// შექმენი array of objects სტუდენტებით (name, score).

// filter-ით იპოვე მხოლოდ 50-ზე მაღალი ქულების მქონე სტუდენტები.

// sort-ით დაალაგე ქულების მიხედვით კლებადობით.

// 🎯 ამოცანა:
// მოცემულია array, სადაც შენახულია პროდუქტის ობიექტები:

// const products = [
//   { name: "Apple", price: 2 },
//   { name: "Orange", price: 1 },
//   { name: "Banana", price: 3 },
// ];

// for loop-ით დაბეჭდე ყველა პროდუქტის სახელი და ფასი.

// filter – იპოვე მხოლოდ 2 ლარზე მეტი ფასის მქონე პროდუქტები.

// map – ყველა სახელს დაუმატე "Product: " წინ.

// spread operator

// ელემენტების გაშლა ახალ array-ში
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// console.log(arr2);

// Object-ში გამოყენება

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };

// console.log(obj2);

// Function arguments-ში

// function sum(x, y, z) {
//   return x + y + z;
// }

// const nums = [1, 2, 3];
// console.log(sum(...nums)); // 6

// sort – დაალაგე ფასის მიხედვით ზრდადობით.

/////////////////////////

// forEach – Array მეთოდი

// forEach() საშუალებას გაძლევთ array-ს თითოეულ ელემენტზე გამოიძახოთ ფუნქცია

// განსხვავება map-ისგან: არ ქმნის ახალ array-ს, უბრალოდ აკეთებს მოქმედებას თითო ელემენტზე
// const numbers = [1, 2, 3];

// numbers.forEach((num, index) => {
//   console.log("index:", index, "value:", num);
// });
// ////
// forEach vs for loop
// const arr = [10, 20, 30];

// // for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // forEach
// arr.forEach(item => console.log(item));

// forEach ფუნქციის პარამეტრები

// forEach ფუნქციას შეგიძლია გადასცე მაქსიმუმ 3 პარამეტრი ფუნქციაში:

// array.forEach(function(element, index, array) {
//   // code
// });
//

// const fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach((item, i, arr) => {
//   console.log("Element:", item, "Index:", i, "Array:", arr);
// });
//////////////////////////////

// Objects + forEach

// ინსტრუქცია:

// გაქვს array of objects:

// const students = [
//   { name: "Angela", age: 22, hasLicence: true },
//   { name: "Bob", age: 17, hasLicence: false },
//   { name: "Clara", age: 19, hasLicence: true },
// ];

// გამოიყენე forEach და დაბეჭდე თითოეული სტუდენტის სახელი და "can drive" თუ hasLicence = true, ან "cannot drive" თუ false.

// მაგალითი შედეგისთვის:

// Angela can drive
// Bob cannot drive
// Clara can drive

// 3. Array.filter – მოძებნე სტუდენტები ასაკით

// მოძებნე მხოლოდ 18-ზე უფროსი სტუდენტები filter მეთოდით.

// console.log შედეგი.

// 4. Array.map – სახელი და წინადადება

// Map გამოიყენე, რომ თითო სტუდენტის სახელს დაუმატო წინ "Student: "

// console.log შედეგი.

// მაგალითი:

// [
//   { name: "Student: Angela", age: 22, hasLicence: true },
//   ...
// ]

// 5. Array.sort – ასაკის მიხედვით

// გამოყენე sort და დაალაგე სტუდენტები ასაკის ზრდადობით.

// console.log შედეგი.

// 6. Spread operator და clone

// შეიქმენი ახალი array, რომელიც არის students array-ის კლონი, მაგრამ თან დაამატე ახალი სტუდენტი: { name: "David", age: 20, hasLicence: false }

// const newStudents = [...students, { name: "David", age: 20, hasLicence: false }];
// script.js
// ნაჩვენებია script.js