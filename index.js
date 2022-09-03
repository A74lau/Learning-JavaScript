
//GETTING STARTED
// //writing output to the console
// console.log("Orange Juicestice!");
// console.log("Kill the account!");

// // //writing output to a window alert pop up
// window.alert("actually trolling");

// //This is a comment
// /*

//     multiline comment

// */

//-------------------------------------------------------------------------------


//VARIABLES
//use LET keyword to declare variable (do not have to specify data type);
// let first_name = "Anson";
// let age = 21;
// let student = true;

// console.log("hello my name is ", first_name);
// console.log("I am ", age, "years old");
// console.log(student);


// //writes to the webpage based on tag (in this case p1,p2,p3)
// document.getElementById("p1").innerHTML = "Hello " + first_name;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " +  student;

//--------------------------------------------------------------------------------

//ARITHMETIC
// let students = 2;
// for (let i = 0; i < 21; i++) {
//     students++;
// }
// let extraStudents = students % 2;

// console.log("There are ", students);
// console.log("Now there are ", extraStudents);

//----------------------------------------------------------------------------------

//ACCEPTING USER INPUT

//easy way with window prompt
// let username = window.prompt("What's your name");
// console.log(username);

//difficult way with html textbox
// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }


//----------------------------------------------------------------------------------

//TYPE CONVERSION
// let age =  window.prompt("How old are you?");
// console.log(typeof age);
// //converts string input to a number
// age = Number(age);
// console.log(typeof age);
// age += 1;

// console.log("Happy Birthday! You are ", age, " years old");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String("3.14");
// //will result in true, else if it is empty it will return false
// z = Boolean("pizza");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//----------------------------------------------------------------------------------

//CONSTANTS

// const pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);


// circumference = 2*pi*radius;

// console.log("The circumference is: ", circumference);

//----------------------------------------------------------------------------------

//MATH LIBRARY

// let x  = Math.PI;

// x = Math.round(x);
// let y = Math.ceil(x);
// let z = Math.floor(x);
// let a = Math.pow(x,2);
// let b = Math.sqrt(x);
// let c = Math.max(x,y,z);
// let d = Math.min(x,y,z);

// console.log(d);

//----------------------------------------------------------------------------------

//SOLVING RIGHT ANGLE TRIANGLE HYPOTENUSE
// document.getElementById("SubmitButton").onclick = function() {

//     let a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     let b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;

// }


//----------------------------------------------------------------------------------

//COUNTER PROGRAM

// let counter = 0;

// document.getElementById("Increase").onclick = function() {
//     counter++;
//     document.getElementById("Counter").innerHTML = counter;
// }

// document.getElementById("Decrease").onclick = function() {
//     counter--;
//     if (counter < 0) {
//         counter = 0;
//     }
 
//     document.getElementById("Counter").innerHTML = counter;
// }

// document.getElementById("Reset").onclick = function() {
//     counter = 0;
//     document.getElementById("Counter").innerHTML = counter;
// }

//----------------------------------------------------------------------------------

//RANDOM NUMBER GENERATOR

// let x,y,z; 

// document.getElementById("Roll").onclick = function() {
//     //random number from  1-6 (because of +1 offset)
//     x = Math.floor(Math.random()*6 + 1);
//     y = Math.floor(Math.random()*6 + 1);
//     z = Math.floor(Math.random()*6 + 1);

//     document.getElementById("Number1").innerHTML = x;
//     document.getElementById("Number2").innerHTML = y;
//     document.getElementById("Number3").innerHTML = z;

// }

//----------------------------------------------------------------------------------

// //STRING METHODS
// let username = "Valorant";

// console.log(username.length);
// let first_letter = console.log(username.charAt(0));
// let l_letter = console.log(username.indexOf("l"));
// let last_letter = console.log(username.lastIndexOf("n"));
// username = username.toUpperCase();
// username = username.toLowerCase();
// username = username.trim(); //gets rid of empty spaces before and after last letter

// username = username.replaceAll("a", "e");

// console.log(username);

// let fullname = "Anson Lau";
// let firstname;
// let lastname;

// // firstname = fullname.slice(0,5);
// // lastname = fullname.slice(6,9);
// firstname = fullname.slice(0, fullname.indexOf(" "));
// lastname = fullname.slice(fullname.indexOf(" "));

// console.log(firstname);
// console.log(lastname);

//----------------------------------------------------------------------------------

//METHOD CHAINING
    //Can user multiple methods from the library in one line
// let username = "bro";
// let letter = username.charAt(0).toUpperCase();
// console.log(letter);

//----------------------------------------------------------------------------------

//IF STATEMENTS
// let age = window.prompt("How old are you?");
// age = Number(age);

// if (age >= 18) {
//     console.log("You are an adult!");
// } else if (age < 0) {
//     console.log("Nice try....kid.");
// } else {
//     console.log("You are a child.");
// }

//----------------------------------------------------------------------------------

//CHECKED PROPERTY

// let subscribe = document.getElementById("subscribe");
// let visa = document.getElementById("VisaButton");
// let mastercard = document.getElementById("MastercardButton");
// let paypal = document.getElementById("PaypalButton");


// if (visa.checked) {
//     document.getElementById("MastercardButton") = true;
//     paypal.disabled = true;
// } else if (mastercard.checked) {
//     paypal.disabled = true;
//     visa.disabled = true;
// } else if (paypal.checked) {
//     mastercard.disabled = true;
//     visa.disabled = true;
// }

// document.getElementById("button").onclick = function() {
//     if (subscribe.checked) {
//         console.log("You are subscribed!");
//     } else {
//         console.log("You are not subscribed :(");
//     }

//     if (visa.checked) {
//         console.log("You are paying with Visa");
//         mastercard.disabled = true;
//         paypal.disabled = true;

//     } else if (mastercard.checked) {
//         console.log("You are paying with Mastercard");
//         paypal.disabled = true;
//         visa.disabled = true;
//     } else if (paypal.checked) {
//         console.log("You are paying with Paypal");
//         mastercard.disabled = true;
//         visa.disabled = true;
//     } else {
//         console.log("You have not payed :(");
//     }
// }

//----------------------------------------------------------------------------------

//SWITCH STATEMENTS
// let grade = 95;

// switch(true){
//     case grade >= 90:
//         console.log("A");
//     case grade >= 80:
//         console.log("B");
//     case grade >= 70:
//         console.log("C");
//     default:
//         console.log("No mark is inputed");
// }

//----------------------------------------------------------------------------------

// //WHILE LOOPS AND FOR LOOPS

// let counter = 0;

// do {
//     counter++;
// } while (counter < 100);

// console.log(counter);


    //continue skips one iteration of the loop, while break exits the loop completely.
// let counter  = 0;
// for (let i = 0; i < 32; i++) {
//     counter++;
//     if (counter == 13) {
//         continue;
//     }
//     console.log(counter);
// }

//----------------------------------------------------------------------------------

//NESTED FOR LOOPS

// let symbol = window.prompt("Enter a symbol");
// let rows = window.prompt("Enter the number of rows");
// let columns = window.prompt("Enter the number of columns");

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         document.getElementById("label").innerHTML += symbol;
//     }

//     document.getElementById("label").innerHTML += "<br>";
// }

//----------------------------------------------------------------------------------

//FUNCTIONS

// start();

// function start() {
//     let name = window.prompt("Enter your name:");
//     let age = window.prompt("Please enter your age:");

//     happyBirthday(name,age);
// }

// function happyBirthday(a,b) {
//     console.log("Happy birhtday to you!");
//     console.log("Happy birhtday to you!");
//     console.log("Happy birhtday dear "+ a);
//     console.log("Happy birhtday to you!");
//     console.log("You are " + b + " years old!");
// } 

//----------------------------------------------------------------------------------

// TERNARY OPERATOR

// let score = 100;

// console.log(checkScore(score));

// function checkScore(number) {
//     return score == 100? true: false;
// }

//----------------------------------------------------------------------------------

// VARIABLE SCOPE

// let = variables are limited to block scope {}
// var = variables are limited to a function() {}
// good practice to use let over var

// for (var i = 0; i < 3; i++) {
// }

// console.log(i);

//----------------------------------------------------------------------------------

//Template literals
// let userName = "Anson";
// let money = 1000;

// let text = 
// `Hello ${userName} <br>
// You have ${money} dollars in your account`;

// document.getElementById("text").innerHTML = text;

//----------------------------------------------------------------------------------

//FORMAT CURRENCY
// let greeting = 100000000;

// greeting = greeting.toLocaleString("hi-IN"); //Money in Hindi
// greeting = greeting.toLocaleString("de-DE", { style: "currency", currency: "EUR"}); //Money in EUROS

// greeting = greeting.toLocaleString(undefined, {style: "unit", unit: "celsius"}); //Temperature in Celsius
// console.log(greeting);

//----------------------------------------------------------------------------------

//NUMBER GUESSING GAME


// const number = Math.floor(Math.random()*9+1);

// document.getElementById("button").onclick = function() {
//     let guess = document.getElementById("textbox").value;
//     guess = Number(guess);
    
//    if (guess > 0 && guess < 10) {
//         if (guess == number) {
//             document.getElementById("result").innerHTML = "Correct!";
//             alert("CORRECT!");
//         } else {
//             document.getElementById("result").innerHTML = "Incorrect!";
//         }
//    } else {
//         document.getElementById("result").innerHTML = "Invalid!";
//    }
// }

// console.log(number);

//----------------------------------------------------------------------------------

//TEMPERATURE CONVERTER

// c = document.getElementById("Celsius");
// f = document.getElementById("Fahrenheit")
// result = document.getElementById("result");


// function Celsius(temperature) {
//     temperature = temperature*(9/5) + 32;
//     return temperature;
// }

// function Fahrenheit(temperature) {
//     temperature = (temperature-32)*5/9;
//     return temperature;
// }

// document.getElementById("button").onclick = function() {
//     temp = document.getElementById("textbox").value;
//     temp = Number(temp);
    
//     if (c.checked) {
//         result.innerHTML = Celsius(temp);
//         f.disabled = true;
//     } else if (f.checked) {
//         result.innerHTML = Fahrenheit(temp);
//         c.disabled = true;
//     } else {
//         result.innerHTML = "Invalid Input"; 
//     }
// }

//----------------------------------------------------------------------------------

//ARRAY
// let fruits = ['apple', 'orange', 'banana'];

// fruits.push("lemon"); //add to the back
// fruits.pop();
// fruits.unshift("mango"); //add element to the front
// fruits.shift(); //removes front element

// let length = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(fruits);

//----------------------------------------------------------------------------------

//LOOPING THROUGH ARRAY

// let prices = [1,2,3,4,5];

//for (let i; i < prices.length; i++) {
    //console.log(i);
//}

// for (let i of prices) {
//     console.log(i);
// }


//----------------------------------------------------------------------------------

//SORTING A STRING ARRAY

// let string = ["Anson", "Arella", "Jello", "Deron", "Boaz"];

// string.sort().reverse();

// for (let i of string) {
//     console.log(i);
// }

//----------------------------------------------------------------------------------

//2D ARRAY

// let lang = ["Java", "Python", "C++"];
// let tech = ["Git","Angular","Node.js"];

// let resume = [lang,tech];

// resume[0][1] = "C#";

// for (let i of resume) {
//     for (let k of i) {
//         console.log(k);
//     }
// }

//----------------------------------------------------------------------------------

//SPREAD OPERATOR

// let userName = "Anson Lau";
// let numbers = [1,2,3,4,5];

//spread operator helps expand a array into individual elements
// console.log(...numbers);

//----------------------------------------------------------------------------------

//REST PARAMETERS

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(sumOfN(x,y,z));
// ... operator helps pack an indefinite number of elements into an array
// function sumOfN(...array) {
//     return array;
// }

//----------------------------------------------------------------------------------

//CALLBACK FUNCTION
// sum(3,2,output);

// function output(output){
//     console.log(output);
// }

// function sum(a,b,func) {
//     let result = a+b;
//     func(result);
// }

//----------------------------------------------------------------------------------

//array.forEach()

// let students = ["anson","arella","boaz","jello","deron"];

//applies the cap function to every element in the array
    //forEach() has access to 3 things: element, index, array

// students.forEach(cap);
// function cap(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(students);

//----------------------------------------------------------------------------------

//array.map() executes a callback function for each array element
    //creates a new array

    // let numbers = [1,2,3,4,5];
    // let squares = numbers.map(sq);
    // squares.forEach(print);

    // function sq(number) {
    //     return Math.pow(number,2);
    // }

    // function print(element) {
    //     console.log(element);
    // }
//----------------------------------------------------------------------------------

//array.filter() creates a new array with all elements that pass the test provided by a function

// let ages = [1,34,234,5,15];

// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function print(element) {
//     console.log(element);
// }

// function checkAge(element) {
//     if (element >= 18) {
//         return element;
//     }
// }

//----------------------------------------------------------------------------------

//array.reduce() reduces an array to a single value

// let prices = [50,23,502,34];
// let total = prices.reduce(checkOut);

// console.log(`The total is : $${total}`);

// function checkOut(total,element) {
//     return total + element;
// }

//----------------------------------------------------------------------------------

//SORT AN ARRAY OF NUMBERS
    //.sort() ONLY WORKS ON STRINGS so 10 will come before 2

// let grades = [100,50.23,43,59];


// grades = grades.sort(dSort);

// grades.forEach(print);

// function dSort(x,y) {
//     return y-x;
// }

// function aSort(x,y) {
//     return x-y;
// }

// function print(element) {
//     console.log(element);
// }

//----------------------------------------------------------------------------------

//FUNCTION EXPRESSION
    //function without a name

// const greeting = function() {
//     console.log("Hello");
// }

// greeting();

// let count = 0;

// function increaseCount() {
//     count += 1;
//     document.getElementById("count").innerHTML = count;
// }

// function decreaseCount() {
//     count -= 1;
//     document.getElementById("count").innerHTML = count;
// }

//----------------------------------------------------------------------------------

//ARROW FUNCTION

// const percent = function(x,y) {
//     return x/y*100;
// }

//same function instead use arrow function
// const percent = (x,y) => x/y *100;
// console.log(`${percent(75,100)}%`);

// let grades = [100,50,30];

// grades.sort((x,y) => y-x);
// grades.forEach((element) => console.log(element));

//----------------------------------------------------------------------------------

//SHUFFLE ELEMENTS IN AN ARRAY
// let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// shuffle(cards);

// cards.forEach(card => console.log(card));

// function shuffle(array) {
//     let currentIndex = array.length;

//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random()*array.length);
//         currentIndex--;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }

//----------------------------------------------------------------------------------

//NESTED FUNCTIONS

// let userName = "Anson Lau";
// let userInbox = 0;

// login();

// function login() {
//     displayUserName();
//     displayUserInbox();
// }

// function displayUserName() {
//     console.log(`Welcome ${userName}`);
// }

// function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`);
// }

//----------------------------------------------------------------------------------

//MAPS
    //associate key with a value

// const store = new Map([
//     ["t-shirt",20], ["jeans",30], ["socks", 10]
// ]);

// let shoppingCart = 0;

//using .get() method
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("jeans");
// console.log(shoppingCart);

//checks if map has value and returns boolean true
// console.log(store.has("socks"));

//checks map size
// console.log(store.size);

//prints out values of map
// store.forEach((value,key) => console.log(`${key} $${value}`));

//----------------------------------------------------------------------------------

//OBJECTS

// const car = {
//     model:"Mclaren",
//     color:"red",
//     year:2025,

//     drive: function() {
//         console.log("You drive the car");
//     },

//     brake: function() {
//         console.log("You step on the brakes");
//     }
// }

// const plane = {
//     type: "fighter",
//     color: "black",
//     year: "2020",

//     takeOf: function() {
//         console.log("You are taking off");
//     },

//     land: function() {
//         console.log("You are landing");
//     }
// }

// console.log(plane.type);
// console.log(car.model);
// console.log(car.color);

//----------------------------------------------------------------------------------

//'THIS' KEYWORD
    // this = reference to a particular object
    // the object depends on the immediate context

// const plane = {
//     type: "fighter",
//     color: "black",
//     year: "2020",

//     takeOf: function() {
//         console.log(`You are taking off in the ${this.type} plane`);
//     },

//     land: function() {
//         console.log("You are landing");
//     }
// }

// plane.takeOf();

//this refers to window object because it is the immediate context
// this.name = "Anson"; 

//same as:
// window.name = "Anson";
// console.log(this);

//----------------------------------------------------------------------------------

//GAMBLING GAME

// let bankAmount = document.getElementById("amount").value;

// let betAmount = document.getElementById("input").value;


// document.getElementById("bet").onclick = function() {
//     document.getElementById("amount").innerHTML = bankAmount - betAmount;
//     document.getElementById("dice1").innerHTML = Math.floor(Math.random()*9+1);
//     document.getElementById("dice2").innerHTML = Math.floor(Math.random()*9+1);
//     document.getElementById("dice3").innerHTML = Math.floor(Math.random()*9+1);

//     if (dice1 == dice2 == dice3) {
//         document.getElementById("amount").innerHTML = betAmount*3;
//         window.prompt("You won!");
//     } else {
//         window.prompt("You lost!. Please try again!");
//     }
// }

//----------------------------------------------------------------------------------

//CLASS
    //blueprint for creating objects
    //define properties and methods
    //use a constructor for unique properties

// class Player {
//     score = 0;
    
//     pause() {
//         console.log("You paused the game");
//     }

//     exit() {
//         console.log("You exited the game");
//     }
// }

//create as many objects that are of the same class
// const player1 = new Player();
// const player2 = new Player();

// player1.score += 1;

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();

//----------------------------------------------------------------------------------

//CONSTRUCTOR
    //special method of a class
    //accepts arguments and assigns properties

    // class Student {
    //     constructor(name,age,gpa) {
    //         this.name = name;
    //         this.age = age;
    //         this.gpa = gpa;
    //     }

    //     study() {
    //         console.log(`${this.name} is studying`);
    //     }

    // }

    // const student1 = new Student("Spongebob",30,3.8);
    // const s2 = new Student("Patrick",24,3.5);

    // console.log(student1.name);
    // console.log(student1.age);
    // console.log(student1.gpa);

    // console.log(s2.name);
    // console.log(s2.age);
    // console.log(s2.gpa);

    // s2.study();
    // student1.study();

//----------------------------------------------------------------------------------

//STATIC KEYWORD
    //belongs to the class and not the object
    //properties: useful for caches, fixed-configuration

// class car {
//     static numberOfCars = 0;
//     constructor(model) {
//         this.model = model;
//         car.numberOfCars += 1;
//     }

//     static startRace() {
//         console.log("3.....2...1....G0!");
//     }
// }

// const car1 = new car("Mustsang");
// const car2 = new car("Mustsang");

// car.startRace();

//use "car." to access the static property
// console.log(car.numberOfCars);


//----------------------------------------------------------------------------------

//INHERITANCE
    //a child class that can inherit all the methods and properties from another class
    //user a "extends" method to make a class inherit methods from a different class

    // class Animal {
    //     alive = true;
    //     eat(){
    //         console.log(`This ${this.name} is eating`);
    //     }

    //     sleep(){
    //         console.log(`This ${this.name} is sleeping`);
    //     }
        
    // }
    // class Rabbit extends Animal {
    //     alive = true;
    //     name = "rabbit";
    //     run(){
    //         console.log(`This ${this.name} is running`);
    //     }
    // }

    // class Fish extends Animal {
    //     alive = true;
    //     name = "fish";
    //     swim(){
    //         console.log(`This ${this.name} is swimming`);
    //     }
    // }

    // const fish = new Fish();
    // const rabbit = new Rabbit();
    // rabbit.eat();
    // rabbit.sleep();
    // rabbit.run();

//----------------------------------------------------------------------------------

//SUPER KEYWORD
    //refers to the parent class
    //commonly used to invoke constructor of a parent class

    // class Animal {
    //     constructor(name,age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }

    // class Rabbit extends Animal {
    //     constructor(name,age,runSpeed) {
    //         super(name,age);
    //         this.runSpeed = runSpeed;
    //     }
    // }

    // class Fish extends Animal {
    //     constructor(name,age,swimSpeed) {
    //         super(name,age);
    //         this.runSpeed = swimSpeed;
    //     }
    // }

    // const rabbit = new Rabbit("dip",12,34);
    // const fish = new Fish("nemo",2,32);

    // console.log(rabbit.name);
    // console.log(rabbit.age);
    // console.log(rabbit.runSpeed);

//----------------------------------------------------------------------------------

//GET
    //binds an object property to a function when that peropety is accessed
//Set 
    //binds an object property to a function when that property is assigned a value
    
    // class Car {
    //     constructor(power) {
    //         this._gas = 50;
    //         this._power = power;
    //     }
    //     get power() {
    //         return this._power;
    //     }
    //     get gas() {
    //         return this._gas;
    //     }

    //     set gas(value) {
    //         this._gas = value;
    //     }
    // }

    // let car = new Car(400);

    
    //we used "_power" so that developers would know not to touch the variable
    //car.power is protected 
    // car.power = 100000000000;
    // car.gas = 100000;

    // console.log(car.power);
    // console.log(car.gas);

//----------------------------------------------------------------------------------

//OBJECTS AS ELEMENTS
// class Car{
//     constructor(model,year,color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("tesla",2022,"white");
// const car2 = new Car("mclaren",2020,"orange");

// changeColor(car1, "red");
// displayInfo(car1);


// function displayInfo(car) {
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// function changeColor(car, color) {
//     car.color = color;
// }

//----------------------------------------------------------------------------------

//ARRAY AS OBJECTS

// class Car {
//     constructor (model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive() {
//         console.log("The race has started. You're car is a " + this.model);
//     }
// }

// const car1 = new Car("tesla",2022,"white");
// const car2 = new Car("mclaren",2020,"orange");

// const cars = [car1,car2];

// // console.log(cars[0].model);

// startRace(cars);

// function startRace(cars) {
//     //you can declare objects using const
//     for (const car of cars) {
//         car.drive();
//     }
// }

//----------------------------------------------------------------------------------

//ANONYMOUS OBJECTS
    //objects without a name and are not directly referenced
    //requires less syntax and no need for unique names

// class Cards {
//     constructor (value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [new Cards("A","Hearts"),
//              new Cards("A","Clubs"), 
//              new Cards("A","Spades"),
//              new Cards("A","Diamonds")];

//console.log(cards[0].value + " " +  cards[0].suit);

// cards.forEach(card => console.log(card.value + card.suit));

//----------------------------------------------------------------------------------

//ERROR HANDLING

// try { 
// let x = window.prompt("Enter a #");
// x = Number(x);

// if (isNaN(x)) throw "Not a number";
// if (x == "") throw "empty input";

// }

// //makes the error not red
// catch(error) {
//     console.log(error);
// }

// finally {
//     console.log("This always runs");
// }

//----------------------------------------------------------------------------------

// setTimeout()
    //invokes a function after a number of milliseconds
    //asynchronous function (doesn't pause execution)

    // let timer1 = setTimeout(firstMessage,3000);
    // let timer2 = setTimeout(secondMessage,6000);
    // let timer3 = setTimeout(thirdMessage,9000);

    // function firstMessage() {
    //     alert(`Buy this course for $500`);
    // }

    // function secondMessage() {
    //     alert(`This is not a scam`);
    // }

    // function thirdMessage() {
    //     alert(`Do it!`);
    // }

    // document.getElementById("buy").onclick = function() {
    //     clearTimeout(timer1);
    //     clearTimeout(timer2);
    //     clearTimeout(timer3);
    //     alert("Thanks for buying <3");
    // }


//----------------------------------------------------------------------------------

// setInterval()
    //invokes a funciton repeatedly after a millisecond timer

    // let count = 0;
    // let max = window.prompt("Count up to what #?");
    // max = Number(max);

    // const myTimer = setInterval(countUp, 1000);

    // function countUp() {
    //     count+=1;
    //     console.log(count);

    //     if (count >= max) {
    //         clearInterval(myTimer);
    //     }
    // }

//----------------------------------------------------------------------------------

//DATE OBJECTS
    //is used to work with dates and times

//current date
//let date = new Date();

//year 2022, january 23, 5:03:20 am
// let date = new Date(2022, 0, 23, 5, 3, 20);

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDate();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();

// date.setFullYear(2025);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setSeconds(30);
// date.setMilliseconds(0);

// date = date.toLocaleString();

// console.log(date);


//----------------------------------------------------------------------------------

//CLOCK PROGRAM

// const time = document.getElementById("time");

// update();

// setInterval(update, 1000);

// function update() {
//     let date = new Date();
//     time.innerHTML = formatTime(date);

//     function formatTime(date) {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrpm = hours >= 12 ? `pm` : `am`;

//         hours = (hours%12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds}`;
//     }

//     function formatZeroes(time) {
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }

// }

//----------------------------------------------------------------------------------

//console.time()
    //starts a timer you can use to track how long an operation takes

    //start
    // console.time("Response time");

    //the time it takes to click on the button
    // alert("Click the ok button");

    //this is asynchronous and finishes after the response time
    // setTimeout(() => console.log("HELLO!"),3000);

    //end
    // console.timeEnd("Response time");

//----------------------------------------------------------------------------------

//PROMISE
    //object that encapsulates the result of an asynchronous operation
    //lets asynchronous methods return values like synchronous methods
    //has two arguments, resolve or reject

    // const promise = new Promise ((resolve,reject) => {
    //     let fileLoaded = false;

    //     if(fileLoaded) {
    //         resolve("File Loaded");
    //     } else {
    //         reject("File Not Loaded");
    //     }
    // });

    //if our promise is not resolved, it will throw and exception and we will catch it
    // promise.then(value => console.log(value)).catch(error => console.log(error));

    //example 2
    // const wait = time => new Promise(resolve => {
    //     setTimeout(resolve, time);
    // });

    // wait(3000).then(() => console.log("Thanks for waiting!"));

//----------------------------------------------------------------------------------

//async
    //makes a function return a Promise

    // async function loadFile() {
    //     let fileLoaded = false;

    //     if(fileLoaded) {
    //         return ("File Loaded");
    //     } else {
    //         throw ("File Not Loaded");
    //     }
    // }


    // loadFile().then(value => console.log(value)).catch(error => console.log(error));

//----------------------------------------------------------------------------------

//await
    //makes an async function wait for a Promise

    // async function loadFile() {
        
    //     let fileLoaded = false;

    //     if(fileLoaded) {
    //         return "File loaded";
    //     } else {
    //         throw "File NOT loaded";
    //     }
    // }

    // async function startProcess() {

    //     try {
    //         let message = await loadFile();
    //         console.log(message); 
    //     }
    //     catch(error) {
    //         console.log(error);
    //     }
    // }

    // startProcess();
    
//----------------------------------------------------------------------------------

//MODULES
    //file of resusable code
    //we can import sections of pre-written code to use whenever
    //great for any general utility values and functions

    // import {PI, getCircumference, getArea} from "./math_util.js";

    //OR

    // import * as MathUtil from "./math_util.js";

    // console.log(MathUtil.PI);

    // let circumference = getCircumference(10);
    // console.log(circumference);

    // let area = getArea(10);
    // console.log(area);

//----------------------------------------------------------------------------------

//DOM = Document Object Model (API)
    //an interface for changing the content of a page

    //displays DOM
    // console.log(document);
    //displays properties of DOM
    // console.dir(document);

    // console.log(document.title);
    // console.log(document.URL);

    // document.title = "Anson's webpage";
    // document.location = "http://www.google.com";
    // document.body.style.backgroundColor = "skyblue";
    // document.getElementById("myDiv").innerHTML = "Hello";

//----------------------------------------------------------------------------------

//ELEMENT SELECTORS
    document.body.style.backgroundColor = "skyblue";

    // let element = document.getElementById("title");
    // element.style.backgroundColor = "lightgreen"

    // let fruits = document.getElementsByName("fruits");
    
    // fruits.forEach(fruits => {
    //     if (fruits.checked) {
    //         console.log(fruits.value);
    //     }
    // });

    // let vegetables = document.getElementsByTagName("li");
    // vegetables[0].style.backgroundColor = "lightgreen";

    // let desserts = document.getElementsByClassName("desserts");
    // desserts[0].style.backgroundColor = "lightgreen";


    //querySelector() by "id"
    // let element = document.querySelector("#title");
    // element.style.backgroundColor = "lightgreen";

    //querySelector() by "class"
    // let element = document.querySelector(".desserts");
    // element.style.backgroundColor = "lightgreen";

    //querySelector() for first element with "for"
    // let element = document.querySelector("[for]");

    //querySelectorAll()
    // let element = document.querySelectorAll("li");

    // element.forEach(element => {
    //     element.style.backgroundColor = "lightgreen";
    // });

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------