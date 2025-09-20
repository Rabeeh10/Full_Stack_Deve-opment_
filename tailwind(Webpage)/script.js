//object declaration
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(person.name);
person.age=31; //updating age
console.log(person.age);

//hoisting 

console.log(x)
var x=5;

//simple GRADE calculator
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "failed";
    }
}

let marks = 85;
let grade = calculateGrade(marks);
console.log(`The grade for marks ${marks} is: ${grade}`);

//switch case
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Friday";
            break;
        case 6:
            dayName="Saturday";
            break;
        case 7:
            dayName="Sunday";
            break;
        default:
            dayName="Invalid day";
    }
    return dayName;
}
let dayNumber=3;
let dayName=getDayName(dayNumber);
console.log(`The day for number ${dayNumber} is: ${dayName}`);

//for loop
console.log("For loop from 1 to 5:");   
for(let i=1;i<=5;i++){
    console.log(i);
}

//while loop    

console.log("While loop from 1 to 5:");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//do while loop
console.log("Do-While loop from 1 to 5:");
let j=1;
do {
    console.log(j);
    j++;
} while (j <= 5);

let colors = ["Red", "Green", "Blue"];
//for...of loop
console.log("For...of loop over array elements:");   
for(let color of colors){
    console.log(color);
}

//for...in loop
console.log("For...in loop over object properties:");   
for(let color in colors){
    console.log(`${color}: ${colors[color]}`);
}

//iteration in array using for loop
console.log("For loop over array elements:");
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

for(let color of colors ){
    console.log(color);
}

//function with return type
function add(a,b){
    return a+b;
}

//function without return type
function greet(name){
    console.log(`Hello, ${name}!`);
}

//function with returning a varaible

function addnum(a,b){
    let result=a+b;
    return result;
}

let result=addnum(5,10);
console.log(`multiply: ${result}`);

//arrow function
const multiply=(a,b)=>a*b;
let product=multiply(5,10);
console.log(`multiply: ${product}`);

//return square using arrow function
const square=num=>{
    return num*num;
};

let sq=square(4);
console.log(`Square: ${sq}`);

//normal array 
let numbers=[1,2,3,4,5];

//mixed array
console.log("Mixed array elements:");
let mixedArray=[1,"two",3,true,5.5];
for(let item in mixedArray){
    console.log(typeof(mixedArray[item]));
}

//nested array
let nestedArray=[[1,5],[6,4],[8,9]];

//accessing nested array elements
console.log("Accessing nested array elements:");
console.log(nestedArray[0]);
console.log(nestedArray[1][0]);

//iterating array using for...of
console.log("Iterating array using for...of:");
for(let num of nestedArray){
    console.log(num);
}

//for each on array
console.log("Using forEach to iterate array elements:");
numbers.forEach(num=>console.log(num));

//find double of each element in array using for each
console.log("Finding double of each element in array using forEach:");
let doubles=[];
numbers.forEach(num=>doubles.push(num*2));
console.log(doubles);