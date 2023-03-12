// console.log('JavaScript Programe');
// alert('Hello world');
// document.write('Hello world');
// confirm('hello world');
// prompt('hello ram');

// const num1 = 5;
// const num2 = 3;
// const sum = num1 + num2;
// console.log(sum);

// const num1 = parseInt(prompt('enter the first number '));
// const num2 = parseInt(prompt('enter the second number'));
// const sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// const number = prompt('enter the number');
// const result = Math.sqrt(number);
// console.log(`the square root of ${number} is ${result}`);

// const number1 = 2.25;
// const number2 = -4;
// const number3 = 'hello';
// const result1 = Math.sqrt(number1);
// const result2 = Math.sqrt(number2);
// const result3 = Math.sqrt(number3);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// const baseValue = prompt('enter the base of a triangle');
// const hieghtValue = prompt('enter the hieght of a triangle');
// const areaValue = (baseValue * hieghtValue)/2;
// console.log('the area of the triangle is ' + areaValue);

// const side1 = parseInt(prompt('enter side1'));
// const side2 = parseInt(prompt('enter side2'));
// const side3 = parseInt(prompt('enter side3'));
// const s = (side1 + side2 + side3)/2;
// const areaValue = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(areaValue);

// let a = prompt('enter the first variable');
// let b = prompt('enter the second variable');
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// let a = prompt('enter the first variable ');
// let b = prompt('enter the second variable ');
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// let a = parseInt(prompt('enter a first variable'));
// let b = parseInt(prompt('enter a second variable'));
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

// let a = parseInt(prompt('enter the first variable'));
// let b = parseInt(prompt('enter the second variable'));
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(a);
// console.log(b);

// const a = Math.random();
// console.log(a);

// const a = Math.random()*(10-1)+1;
// console.log(`Random value between 1 to 10 is ${a}`);

// const a = Math.floor(5.877);
// console.log(a);

// const min = parseInt(prompt('enter a min value '));
// const max = parseInt(prompt('enter a max value'));
// const a = Math.floor(Math.random()*(max-min+1))+min;
// console.log(min);
// console.log(max);
// console.log(a);

// const number = parseInt(prompt('enter a number'));
// if(number > 0){
//     console.log('positive');
// }
// else if (number == 0){
//     console.log('zero');
// }
// else{
//     console.log('negative');
// }

// const number = prompt('enter a number');
// if(number >= 0){
//     if(number == 0){
//         console.log('zero')
//     }
//     else{
//         console.log('positive')
//     }
// }
// else{
//     console.log('nagetive')
// }

// const number = prompt('enter a number');
// if(number%2==0){
//     console.log('The number is even');
// }
// else{
//     console.log('the number is odd');
// }

// const number = prompt('enter a number');
// const result = (number%2==0)?"even":"odd";
// console.log(`The number is ${result}`);

// const num1 = parseInt(prompt('enter first number'));
// const num2 = parseInt(prompt('enter a second number'));
// const num3 = parseInt(prompt('enter a third number'));
// let largest;
// if(num1 >= num2 && num1 >= num3){
//     largest = num1;
// }
// else if(num2 >= num1 && num2 >= num3){
//     largest = num2;
// }
// else{
//     largest = num3;
// }
// console.log("the largest number is " + largest);

// const num1 = parseInt(prompt('enter first number'));
// const num2 = parseInt(prompt('enter second number'));
// const num3 = parseInt(prompt('enter third number'));
// const largest = Math.max(num1, num2, num3);
// console.log("the lagest number is " + largest);

// const number = parseInt(prompt('enter a number'));
// let isPrime = true;
// if(number === 1){
//     console.log('number is one');
// }
// else if (number > 1){
//     for (let i=2 ; i<number; i++){
//         if(number%i==0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log('number is prime')
//     }
//     else{
//         console.log('number is not prime')
//     }
// }
// else{
//     console.log('number is not prime')
// }

// const number = parseInt(prompt('enter a positive integer'));
// if(number < 0){
//     console.log('error number is a nagetive');
// }
// else if (number === 0){
//     console.log(`the factorial of  ${number} is 1 `)
// }
// else{
//     let fact = 1;
//     for (let i=1; i<=number; i++){
//         fact *= i;
//     }
//     console.log(`the factorial of ${number} is ${fact}`)
// }

// const number = parseInt(prompt('enter a integer number'));
// for(let i=1; i<=10; i++){
//     const result = i*number;
//     console.log(result);
// }

// const number = parseInt(prompt('enter an integer'));
// const range = parseInt(prompt('enter a range'));
// for(let i=1; i<=range; i++){
//     const result = i*number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// const number = parseInt(prompt('enter a terms'));
// let n1=0, n2=1, nextTerms;
// for(let i=1; i<=number; i++){
//     console.log(n1);
//     nextTerms=n1+n2;
//     n1=n2;
//     n2=nextTerms;
// }

// const number = parseInt(prompt('enter a positive number'));
// let n1=0, n2=1, nextTerms;
// console.log('Fibonacci Series');
// console.log(n1);
// console.log(n2);
// nextTerms=n1+n2;
// while(nextTerms <= number){
//     console.log(nextTerms);
//     n1=n2;
//     n2=nextTerms;
//     nextTerms=n1+n2;
// }

// const number = prompt('enter a positive integer');
// let sum;
// let temp = number;
// while(temp > 0){
//     let remainder = temp % 10;
//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp/10);
// }
// if(sum === number){
//     console.log('armstronge number')
// }
// else{
//     console.log('not armstronge number')
// }

// const operator = prompt('enter operator (+, -, *, /, %):.');
// const n1 = parseFloat(prompt('enter first number'));
// const n2 = parseFloat(prompt('enter a second number'));
// let result;
// if(operator == '+'){
//     result = n1 + n2;
// }
// else if (operator == '-'){
//     result = n1 - n2;
// }
// else if (operator == '*'){
//     result = n1 * n2;
// }
// else if (operator == '/'){
//     result = n1 / n2;
// }
// else if (operator == '%'){
//     result = n1 % n2;
// }
// else{
//     console.log('wroge operator');
// }
// console.log(`${n1} ${operator} ${n2} = ${result}`);

// const operator = prompt('enter operator (+, -, *, /, %):..');
// let result;
// const n1 = parseFloat(prompt('enter first number'));
// const n2 = parseFloat(prompt('enter a second number'));
// switch(operator){
//     case '+':
//         result = n1 + n2;
//         console.log(`${n1} + ${n2} = ${result}`);
//         break;
//     case '-':
//         result = n1 - n2;
//         console.log(`${n1} - ${n2} = ${result}`);
//         break;
//     case '*':
//         result = n1 * n2;
//         console.log(`${n1} * ${n2} = ${result}`);
//         break;
//     case '/':
//         result = n1 / n2;
//         console.log(`${n1} / ${n2} = ${result}`);
//         break;
//         default:
//             console.log('Invalid operator');
//             break;
// }

// const number = parseInt(prompt('enter a positive integer:'));
// let sum = 0;
// for(let i=1; i<=number; i++){
//     sum += i;
// }
// console.log('the sum natural number: ', sum);

// const number = parseInt(prompt('enter a positive integer'));
// let sum = 0, i=1;
// while(i <= number){
//     sum += i;
//     i++;
// }
// console.log('the sum of natural numbers:', sum);


// const a = prompt('enter a first integer');
// const b = prompt('enter a second integer');
// const c = prompt('enter a third integer');
// const result1 = a%10;
// const result2 = b%10;
// const result3 = c%10;
// if(result1 == result2 && result1 == result3){
//     console.log(`${a}, ${b} and ${c} have the same last digit`);
// }
// else{
//     console.log(`${a}, ${b} and ${c} have the different last digit`);
// }

// const num1 = prompt('enter a first positive integer');
// const num2 = prompt('enter a second integer');
// let min = (num1 > num2) ?num1:num2;
// while(true){
//     if(min % num1 == 0 && min % num2 == 0){
//         console.log(`the lcm of ${num1} and ${num2} is ${min} `);
//         break;
//     }
//     min++;
// }

// const num = prompt('enter a positive number');
// console.log(`the factorial of ${num} is: `);
// for (let i=1; i<=num; i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }

// function guessNumber(){
//    const random = Math.floor(Math.random() * 10)+1;
//    let number = parseInt(prompt('guess a number from 1 to 10'));
//    while(number !== random){
//     number = parseInt(prompt('guess a number from 1 to 10'));
//    }
//    if(number == random){
//     console.log('You gussed the correct number: ');
//    }
// }
// guessNumber();

// const string = prompt('enter a charactor ');
// const result = string.codePointAt(0);
// console.log(`the ASCII value is ${result}`);

// const string = prompt('enter a character');
// const result = string.charCodeAt(0);
// console.log('The ASCII value is', result);

// const string = prompt('enter a string');
// const value = checkPalindrome(string);
// console.log(value);
// function checkPalindrome(string){
//     const len = string.length;
//     for(let i=0; i<len/2; i++){
//         if(string[i] !== string[len -1 -i]){
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It ia a palindrome';
// }

// const string = prompt('enter a string');
// checkPalindrome(string);
// function checkPalindrome(string){
//     const stringValue = string.split('');
//     const stringReverse = stringValue.reverse();
//     const reverseValue = stringReverse.join('');
//     if(reverseValue == string){
//         console.log('It is a palindrome');
//     }
//     else{
//         console.log('It is a not palindrome');
//     }
// }

// const string = prompt('enter a string');
// const array = string.split(' ');
// array.sort();
// console.log('The sorted words are:');
// for(const element of array){
//     console.log(element); 
// }

// const string = 'Mr Red has a red house and a red car';
// const newText = string.replace('red', 'blue');
// console.log(newText);

// const string = 'Mr Red has a red house and a red car';
// const regex = /red/g;
// const newText = string.replace(regex, 'blue');
// console.log(newText);

// const string = prompt('enter a string');
// const result = reverseString(string);
// console.log(result);
// function reverseString(string){
//     const newString = " ";
//     for(let i=string.length-1; i>=0; i--){
//         newString += string[i];
//     }
//    return newString;
// }

// const string = prompt('enter a string');
// const result = reverseString(string);
// console.log(result);
// function reverseString(string){
//     const arrayString = string.split("");
//     const reverseArray = arrayString.reverse();
//     const joinString = reverseArray.join("");
//     return joinString;
// }

// const person = {
//    name: 'john',
//    age: 20,
//    hobbies: ['reading', 'game', 'coding'],
//    greet: function(){
//     console.log('Hello everyone');
//    },
//    score: {
//     maths: 90,
//     science: 80
//    }
// };
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies);
// person.greet();
// console.log(person.score.maths);
// console.log(person.hobbies[0]);
// console.log(person.age);

// const person = new Object({
//     name: 'john',
//     age: 20,
//     hobbies: ['reading', 'game', 'coding'],
//     greet: function(){
//         console.log('hello everyone');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// });
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[1]);
// person.greet();
// console.log(person.score.maths);

// function Person(){
//     this.name = 'john',
//     this.age = 20,
//     this.hobbies = ['reading', 'game', 'coding'],
//     this.greet = function(){
//         console.log('hello everyone');
//     }
//     this.score = {
//         maths: 90,
//         science: 80
//     }
// }
// const person = new Person();
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[2]);
// person.greet();
// console.log(person.score.science);

// const string = prompt('enter a string');
// const letter = prompt('enter a letter');
// const result = countLetter(string, letter);
// function countLetter(string, letter){
//     let count = 0;
//     for(let i=0; i<string.length; i++){
//         if(str.charAt[i] == letter){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(result);

// const string = prompt('enter a string');
// const letterToCheck = prompt('enter a letter to check');
// const result = countString(string, letterToCheck);
// function countString(str, letter){
//     const re = new RegExp(letter, 'g');
//     const count = str.match(re).length;
//     return count;
// }
// console.log(result);

// const string = prompt('enter a string');
// const result = capitalizeFirstLetter(string);
// function capitalizeFirstLetter(str){
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalized;
// }
// console.log(result);

// const string = prompt('enter a string');
// const result = capitalizedFirstLetter(string);
// function capitalizedFirstLetter(str){
//     const capitalized = str.replace(/^./,str[0].toUpperCase());
//     return capitalized;
// }
// console.log(result);

// const string = prompt('enter a string');
// const result = countVowels(string);
// function countVowels(str){
//     const vewols = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vewols.includes(letter)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(result);

// const string = prompt('enter a string');
// const result = countVewels(string);
// function countVewels(str){
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// console.log(result);

// const student = {
//     name: 'john',
//     age: 20,
//     hobbies: ['reading', 'game', 'coding'],
//     greet: function(){
//         console.log('Hello everyone');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };
// console.log(student);
// console.log(typeof student);
// console.log(student.name);
// console.log(student.score.maths);
// delete student.greet;
// delete student['score'];
// delete student.age;
// delete student.hobbies;

// const person = {
//     id: 1,
//     name: 'Harsh',
//     age: 23
// }

// const harry = 'id' in person;
// if(harry){
//     console.log('The key exists.');
// }
// else{
//     console.log('The key dose not exist.');
// }

// const harry = person.hasOwnProperty('name');

// const person = {
//     name: 'john',
//     age: 21
// }
// const newPerson = Object.assign({}, person);
// console.log(person);
// console.log(newPerson);
// newPerson.name = 'Peter';
// console.log(person);
// console.log(newPerson);
// delete person.name;

// const person = {
//     name: 'john',
//     age: 21
// }
// const clonePerson = {...person}
// console.log(clonePerson);
// clonePerson.name = 'Peter';
// console.log(clonePerson);
// console.log(person);

// const person = {
//     name: 'john',
//     age: 21,
//     marks: {
//         maths: 65,
//         english: 51,
//     }
// }
// const clonePerson = {...person};
// console.log(clonePerson);
// clonePerson.marks.maths = 99;
// console.log(clonePerson.marks.maths);
// console.log(person.marks.maths);

// const person = {
//     name: 'john',
//     age: 21
// }
// const clonePerson = JSON.parse(JSON.stringify(person));
// console.log(clonePerson);
// clonePerson.name = 'Peter';
// console.log(clonePerson.name);
// console.log(person.name);

// const student = {
//     name: 'john',
//     age: 25,
//     hobbies: ['reading', 'game', 'coding'],
// }
// for(let key in student){
//     let value;
//     value = student[key];
//     console.log(key + " _ " + value)
// }

// const student = {
//     name: 'john',
//     age: 20,
//     hobbies: ['coding', 'game', 'reading'],
// }
// for (let [key, value] of Object.entries(student)){
//     console.log(key + " _ " + value);
// }

// const person = {
//     name: 'john',
//     age: 21
// }
// const student = {
//     gender: 'male'
// }
// const newObj = Object.assign(person, student);
// console.log(newObj);

// const person = {
//     name: 'john',
//     age: 21
// }
// const student = {
//     gender: 'male'
// }
// const newObj = {...person, ...student};
// console.log(newObj);

// const student = {
//     name: 'john',
//     age: 25,
//     hobbies: ['reading', 'coding', 'game'],
// }
// let count = 0;
// for(let key in student){
//     ++count;
// }
// console.log(count);

// const student  = {
//     name: 'john',
//     age: 21,
//     hobbies: ['reading', 'game', 'coding'],
// }
// const  result = Object.keys(student).length;
// console.log(result);

// const person = {
//     name: 'john',
//     age: 25,
//     gender: 'male'
// }
// person.height = 5.4;
// person.hobbies = ['reading', 'game', 'coding'];
// console.log(person);

// const person = {
//     name: 'john',
//     age: 54,
//     gender: 'male'
// }
// person['height'] = 5.9;
// console.log(person);

// const string = 'I am front-end develper and react j.s';
// const result = string.split('I').join('Ankit');
// console.log(result);

// const string = 'Mr red has a red house and a red car';
// const regex = /red/g;
// const newText = string.replace(regex, 'Blue');
// console.log(newText);

// const string = 'Mr red has a red house and a red car';
// const newText = string.replace('red', 'Blue');
// console.log(newText);

// const message = 'This is a long message\n' + 
// 'That span across multiple lines\n' + 'The code in coding..'
// console.log(message);

// const message = `This is a long message
// that spans across multiple lines
// in the code..`
// console.log(message);

// const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateString(length){
//     let result = ' ';
//     const characterLength = character.length;
//     for(let i=0; i<length; i++){
//         result += character.charAt(Math.floor(Math.random() * characterLength))
//     }
//     return result;
// }
// console.log(generateString(5));

// const string = 'hello world';
// const checkStirng = 'ha';
// if(string.startsWith(checkStirng)){
//     console.log('The string start with ha');
// }
// else{
//     console.log('The string dose not start with ha');
// }

// const string = 'hello world';
// const checkString = 'he';
// let result = string.lastIndexOf(checkString, 0) == 0;
// if(result){
//     console.log('The string starts with "he"..');
// }
// else{
//     console.log('The string dose not start with "he"..');
// }

// const string = '     Hello       World     ';
// const result = string.trim();
// console.log(result);

// const person = {
//     name: 'john',
//     age: 24
// }
// const result = JSON.stringify(person);
// console.log(result);
// console.log(typeof result);
// console.log(person);

// const person = {
//     name: 'john',
//     age: 27
// }
// const result1 = String(person);
// const result2 = String(person['name']);
// console.log(result1);
// console.log(result2);
// console.log(typeof result1);
// console.log(typeof result2);

// const str = prompt('enter a string');
// const checkString = prompt('enter a string that you want to check');
// if(str.includes(checkString)){
//     console.log(`The string contains ${checkString}`);
// }
// else{
//     console.log(`The string dose not contains ${checkString}`);
// }

// const str = prompt('enter a string');
// const checkString = prompt('enter a string that you want to check');
// if(str.indexOf(checkString) !== -1) {
//         console.log(`The string contains ${checkString}`);
//     } else {
//         console.log(`The string does not contain ${checkString}`);
//     }

// const string1 = 'JavaScript Program';
// const string2 = 'JavaScript Program';
// const result = string1.toUpperCase() == string2.toUpperCase();
// if(result){
//     console.log('The string are similer');
// }
// else{
//     console.log('The string are not similar');
// }

// const string = 'Learing JavaScript Program';
// const result = string.replace(/a/g, "A");
// console.log(result);

// const string = 'Learing JavaScript Program';
// const splitString = string.split('a');
// const result = splitString.join('A');
// console.log(result);

// const string = `I am Learning JavaScript.
// JavaScript in fun.
// JavaScript is easy..`;
// const result = string.replace(/(\r\n|\r|\n)/g, '<br/>');
// console.log(result);

// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy..`;
// const result = string.split('\n').join('<br/>');
// console.log(result);

// const date = new Date(2022, 6, 2, 2, 35, 30);
// // console.log(date);
// const n = date.toDateString();
// // console.log(n);
// const time = date.toLocaleTimeString();
// // console.log(time);
// console.log('Date: ' + n);
// console.log('Time: ' + time);

// const year = prompt('Enter a year');
// checkLeapYear(year);
// function checkLeapYear(year){
//     if((0 == year%4) && (0 != year%100) || (0 == year%400)){
//         console.log(year + " is a leap year");
//     }
//     else{
//         console.log(year + ' is not a leap year');
//     }
// }

// const year = prompt('enter a year');
// checkLeapYear(year);
// function checkLeapYear(year){
//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if(leap){
//         console.log(year + ' is a leap year');
//     }
//     else{
//         console.log(year + ' is a not leap year')
//     }
// }

// let currentDate = new Date();
// let day = currentDate.getDay();
// let month = currentDate.getMonth();
// let year = currentDate.getFullYear();
// if(day < 10){
//     day = '0' + day;
// }
// if(month < 10){
//     month = '0' + month;
// }
// const formattedDate1 = month + '/' + day + '/' + year;
// console.log(formattedDate1);

// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Date: ' + n);
// console.log('Date: ' + time);

// const d1 = new Date();
// const d2 = new Date();
// const compare1 = d1 < d2;
// console.log(compare1);
// const compare2 = d1 <= d2;
// console.log(compare2);
// const compare3 = d1 > d2;
// console.log(compare3);
// const compare4 = d1 >= d2;
// console.log(compare4);
// const compare5 = d1.getTime() == d2.getTime();
// console.log(compare5);
// const compare6 = d1.getTime() != d2.getTime();
// console.log(compare6);

// const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
// console.log(result);
// function removeItemFromArray(array, n){
//     let newArray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i] != n){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// const array = ['you', 'will', 'learn', 'javascript'];
// const hasValue = array.includes('javascript');
// if(hasValue){
//     console.log('Array contains a value..');
// }
// else{
//     console.log('Array dose not contains a value');
// }

// function addElement(){
//     let array = [1, 2, 3, 4, 5];
//     let index = 3;
//     let element = 7;
//     array.splice(index, 0, element);
//     console.log(array);
// }
// addElement();

// function addItem(){
//     let array = [1,2,3,4,5];
//     let index = 3;
//     let element = 9;
//     for(let i=array.length; i>index; i--){
//         array[i] = array[i-1];
//     }
//     array[index] = element;
//     console.log(array);
// }
// addItem();

// let array = [1,2,3];
// let object = {a:12, b:6};
// insertArrayToObject(array, object);
// function insertArrayToObject(array, object){
//     array.push(object);
//     console.log(array);
// }

// let array = [1,2,3];
// let object = {a:6,b:99};
// insertObject(array, object);
// function insertObject(array, object){
//     let index = array.length;
//     array.splice(index, 0, object);
//     console.log(array);
// }

// let array = [1,2,3];
// let object = {a:99, b:88};
// insertObject(array, object);
// function insertObject(array, object){
//     let a = [...array, object];
//     console.log(a);
// }

// const array = [1,2,3];
// checkArray(array);
// function checkArray(array){
//     const result = Array.isArray(array);
//     if(array){
//         console.log('is an array');
//     }
//     else{
//         console.log('is not an array');
//     }
// }

// const array = [1,2,3,4];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);
// function emptyArray(array){
//     array = [];
//     return array;
// }

// const array = [1,2,3,4,5];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);
// function emptyArray(array){
//     array.splice(0, array.length);
//     return array;
// }

// const array = [1,2,3,4,5,6,7,8];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);
// function emptyArray(array){
//     array.length = 0;
//     return array;
// }

// const array = [1,2,3];
// addElement(array);
// function addElement(array){
//     array.unshift(4);
//     console.log(array);
// }

// const array = [1,2,3];
// addElement(array);
// function addElement(array){
//     array.splice(0,0,4);
//     console.log(array);
// }

// const array = [1,2,3];
// addElement(array);
// function addElement(array){
//     array = [4, ...array];
//     console.log(array);
// }

// const array = [1,2,3];
// addElement(array);
// function addElement(array){
//     array = [4].concat(array);
//     console.log(array);
// }

// const array = [1,2,3,4,2,4];
// removeElement(array);
// function removeElement(array){
//     const arrayIndex = [];
//     for(let i of array){
//         if(arrayIndex.indexOf(i) === -1){
//             arrayIndex.push(i);
//         }
//     }
//     console.log(arrayIndex);
// }

// const array = [1,2,3,4,2,4];
// removeElement(array);
// function removeElement(array){
//     const arrayIndex = [...new Set(array)];
//     console.log(arrayIndex);
// }

// const array1 = [1,2,3];
// const array2 = [2,3,4];
// getUniqueAfterMerge(array1, array2);
// function getUniqueAfterMerge(array1, array2){
//     let array = array1.concat(array2);
//     let uniqueArray = [];
//     for(let i of array){
//         if(uniqueArray.indexOf(i) === -1){
//             uniqueArray.push(i);
//         }
//     }
//     console.log(uniqueArray);
// }

// const array1 = [1,2,3];
// const array2 = [2,3,4];
// getUniqueAfterMerge(array1, array2);
// function getUniqueAfterMerge(array1, array2){
//     let array = [...array1, ...array2];
//     let uniqueArray = [...new Set(array)];
//     console.log(uniqueArray);
// }

// const student = [{name: 'sara', age: 94}, {name: 'ram', age: 994}, {name: 'jhon', age: 65}];
// console.log(student);
// console.log(student.sort(compareName));
// function compareName(a, b){
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     let comparison = 0;
//     if(name1 > name2){
//         comparison = 1;
//     }
//     else if(name1 < name2){
//         comparison = -1;
//     }
//     return comparison;
// }

// function compareAge(a, b){
//     return a.gae - b.age;
// }
// const student = [{name: 'Sara', age: 24}, {name: 'John', age: 22}, {anme: 'Jack', age: 27}];
// console.log(student.sort(compareAge));

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 5, b: 9}, {a: 8, b: 9}];
// const result = extractValue(objArray, 'a');
// console.log(result);
// function extractValue(arr, prop){
// let extractedValue = arr.map(function(item) {return item[prop]});
// return extractedValue;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// const result = extractValue(objArray, 'a');
// console.log(result);
// function extractValue(arr, prop){
//     let extractedValue = [];
//     for(let i=0; i<arr.length; ++i){
//         extractedValue.push(arr[i][prop]);
//     }
//     return extractedValue;
// }

// const array1 = [1,3,5,8];
// const array2 = [1,3,5,8];
// compareArray(array1, array2);
// function compareArray(array1, array2){
//     const result = JSON.stringify(array1) == JSON.stringify(array2);
//     if(result){
//         console.log('The array have the same element..');
//     }
//     else{
//         console.log('The array have different element..');
//     }
// }

// const array1 = [1,2,3];
// const array2 = [1,2,3];
// let result = compareArray(array1, array2);
// function compareArray(array1, array2){
//     if(array1.length != array2.lngth){
//         return false;
//     }
//     else{
//         let result = false;
//         for(let i=0; i<array1.length; i++){
//             if(array1[i] != array2[i]){
//             return false;
//         }
//         else{
//             result = true;
//         }
//     }
//     return result;
// }
// }
// if(result){
//     console.log('The array have the same element');
// }
// else{
//     console.log('The array have different element');
// }

// const array1 = [1,2,3,5,9];
// const array2 = [1,3,5,8,7];
// const result = performIntersection(array1, array2);
// function performIntersection(array1, array2){
//     const setA = new Set(array1);
//     const setB = new Set(array2);
//     let intersectionResult = [];
//     for(let i of setB){
//         if(setA.has(i)){
//             intersectionResult.push(i);
//         }
//     }
//     return intersectionResult;
// }
// console.log(result);

// const array1 = [1,2,3,5,9];
// const array2 = [1,3,5,8];
// const result = performIntersection(array1, array2);
// function performIntersection(array1, array2){
//     const intersectionResult = array1.filter(x => array2.indexOf(x) != -1);
//     return intersectionResult;
// }
// console.log(result);

// const array = [1,2,3,4,5,6,7,8];
// const chunk = 4;
// splitIntoChunk(array, chunk);
// function splitIntoChunk(array, chunk){
//     for(let i=0; i<array.length; i+=chunk){
//         let tempArray;
//         tempArray = array.slice(i, i+chunk);
//         console.log(tempArray);
//     }
// }

// const array = [1,2,3,4,5,6,7,8];
// const chunk = 2;
// splitIntoChunk(array, chunk);
// function splitIntoChunk(array, chunk){
//     while(array.length > 0){
//         let tempArray;
//         tempArray = array.splice(0, chunk);
//         console.log(tempArray);
//     }
// }

// const message = 'hello world';
// const number = 10;
// function multiplyNumber(a, b){
//     return a*b;
// }
// export{message, number, multiplyNumber};

// import {message, number, multiplyNumber} from './index.js';
// console.log(message);
// console.log(number);
// console.log(multiplyNumber(3,4));
// console.log(multiplyNumber(6, 9));

// const result1 = getFileExtension('module.js');
// console.log(result1);
// const result2 = getFileExtension('module.txt');
// console.log(result2);
// function getFileExtension(filename){
//     const extension = filename.split('.').pop();
//     return extension;
// }

// const result1 = getFileExtension('module.js');
// console.log(result1);
// const result2 = getFileExtension('module.txt');
// console.log(result2);
// function getFileExtension(filename){
//     const extension = filename.substring(filename.lastIndexOf('.')+1, filename.length);
//     return extension;
// }

// let newVariable;
// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);
// function checkVariable(variable){
//     if(variable == null){
//         console.log('The variable is undefiend or null', variable);
//     }
//     else{
//         console.log('The variable is not a undefiend or null', variable);
//     }
// }

// let newVariable;
// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);
// function checkVariable(variable){
//     if(typeof variable === 'undefined' || variable == null){
//         console.log('The variable is undediend pr null');
//     }
//     else{
//         console.log('The variable is not a undefiend and null');
//     }
// }

// console.log(sum(5, 15));
// console.log(sum(7));
// console.log(sum());
// function sum (x=3, y=5){
//     return x+y;
// }

// const result1 = calculate(10);
// console.log(result1);
// const result2 = calculate();
// console.log(result2);
// function calculate(x=15, y=x+2){
//     return x+y;
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);
// const result = union(setA, setB);
// console.log(result);
// function union(a, b){
//     let unionSet = new Set(a);
//     for(let i of b){
//         unionSet.add(i);
//     }
//     return unionSet;
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);
// const result = union(setA, setB);
// console.log(result);
// function union(setA, setB){
//     let unionSet = new Set();
//     for(let i of setB){
//         if(setA.has(i)){
//             unionSet.add(i);
//         }
//     }
//     return unionSet;
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);
// const result = difference(setA, setB);
// console.log(result);
// function difference(setA, setB){
//     let differenceSet = new Set(setA);
//     for(let i of setB){
//         differenceSet.delete(i);
//     }
//     return differenceSet;
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['apple', 'orange']);
// const result = subset(setA, setB);
// console.log(result);
// function subset(setA, setB){
//     for(let i of setB){
//         if(!setA.has(i)){
//             return false;
//         }
//     }
//     return true;
// }

// const min = parseInt(prompt('enter a min value: '));
// const max = parseInt(prompt('enter a max value: '));
// // Math.floora(Math.random() * (max - min + 1)) + min;
// const a = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random value between ${min} and ${max} is ${a}`);

// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);

// const count = true;
// const x = function(){
//     console.log('hello');
// }
// testVariable(count);
// testVariable(x);
// function testVariable(variable){
//     if(variable instanceof Function){
//         console.log('The variable is of function type');
//     }
//     else{
//         console.log('The variable is not of function type');
//     }
// }

// const count = true;
// const x = function(){
//     console.log('hello');
// };
// testVariable(count);
// testVariable(x);
// function testVariable(variable){
//     if(typeof variable === 'function'){
//         console.log('The variable us of function type');
//     }
//     else{
//         console.log('The variable is not a function type');
//     }
// }

// const count = true;
// const x = function(){
//     console.log('hello');
// };
// testVariable(count);
// testVariable(x);
// function testVariable(variable){
//     if(Object.prototype.toString.call(variable) == '[object Function]'){
//         console.log('The variable is of function type');
//     }
//     else{
//         console.log('The variable is not of function type');
//     }
// }

// const a = 5;
// console.log(a);
// {
//     const a = 50;
//     console.log(a);
// }
// console.log(a);
// const arr = ['work', 'exercise', 'eat'];
// console.log(arr);
// arr[4] = 'hello';
// console.log(arr);

// setTimeout(greet, 3000);
// console.log('This is message is shown dirst: ');
// function greet(){
//     console.log('Hello World');
// }

// sum();
// sum(5);
// sum(5, 9);
// sum(1,2,3,4,56,7,8,9);
// function sum(){
//     if(arguments.length == 0){
//         console.log('You have not passed any argument');
//     }
//     else if(arguments.length == 1){
//         console.log('Pass at least two argument');
//     }
//     else{
//         let result = 0;
//         let length = arguments.length;
//         for(let i=0; i<length; i++){
//             result = result + arguments[i]
//         }
//         console.log(result);
//     }
// }

// sum();
// sum(5);
// sum(5, 9);
// sum(1,2,3,4,5,6,7,8,9);
// function sum(){
//     switch (arguments.length){
//         case 0:
//             console.log('You have not passed any argument');
//             break;
//             case 1:
//                 console.log('Pass at least two argument');
//                 break;
//                 default:
//                     let result = 0;
//                     let length = arguments.length;
//                     for(let i=0; i<length; i++){
//                         result = result + arguments[i];
//                     }
//                     console.log(result);
//                     break;
//     }
// }

// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     // add element to the stack
//     add(element){
//         return this.items.push(element)
//     }
//     // remove element from the stack 
//     remove(){
//         if(this.items.length > 0){
//             return this.items.pop();
//         }
//     }
//     // view the last element 
//     peek(){
//         return this.items[this.items.length - 1];
//     }
//     // check if the stack is empty 
//     isEmpty(){
//         return this.items.length == 0;
//     }
//     // the size of the stack 
//     size(){
//         return this.items.length;
//     }
//     // empty the stack 
//     clear(){
//         this.items = [];
//     }
// }
// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);
// stack.remove();
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// stack.clear();
// console.log(stack.items);

// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(element) {
//         return this.items.push(element);
//     }
//     dequeue(){
//         if(this.items.length > 0){
//             return this.items.shift();
//         }
//     }
//     peek(){
//         return this.items[this.items.length - 1];
//     }
//     isEmpty(){
//         return this.items.length == 0;
//     }
//     size(){
//         return this.items.length;
//     }
//     clear(){
//         this.items = [];
//     }
// }
// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.items);
// queue.dequeue();
// console.log(queue.items);
// console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.size());
// queue.clear();
// console.log(queue.items);

// checkNumber = (4);
// checkNumber = (3.4);
// checkNumber = ("Hello");
// checkNumber = (NaN);
// function checkNumber(x){
//     if(typeof x == 'number' && !isNaN(x)){
//         if(Number.isInteger(x)){
//             console.log(`${x} is integer`);
//         }
//         else{
//             console.log(`${x} is a float value`);
//         }
//     }
//     else{
//         console.log(`${x} is not a number`);
//     }
// }

// name('john', greet);
// name('jack', greet);
// name('sara', greet);
// function greet(){
//     return 'Hello';
// }
// function name(user, fun){
//     const message = fun();
//     console.log(`${message} ${user}`);
// }

// const string = '              hello world         ';
// const result = string.split(' ').join('');
// console.log(result);

// const result = trimString('     hello world    ');
// console.log(result);
// function trimString(x){
//     const result = x.replace(/\s/g,'');
//     return result;
// }

// console.log(8);
// console.log('Hello');
// const x = 'hello';
// console.log(x);
// function sayName(){
//     return 'Hello Johan';
// }
// console.log(sayName());
// const name = 'Jack';
// console.log('hello ' + name);
// let obj = {
//     name: 'Sara',
//     age: 96,
// }
// console.log(obj);

const d1 = new Date();
console.log(d1);
const result = d1.getTime();
console.log(result);