const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
let broken = false;

function breakLamp(){
    lamp.src= './brokenLamp.png';
    broken = true;
}
lamp.addEventListener('dblclick', breakLamp);
  
function lampOn(){
    if (!broken){
    lamp.src = './lampOn.jpg';
    }
}
turnOn.addEventListener('click', lampOn);

function lampOff(){
    if (!broken){
    lamp.src= './lampOff.jpg';
    }
}
turnOff.addEventListener('click', lampOff);












/*
let person = {
name: "bernas",
age: 20
};

console.log(person.name);
console.log(person.age);
//dot notation
person.age = 21;

//bracket notation
person['name'] = 'bernardo';

let firstName = 'name';
person[firstName] = 'Bernardo';

person.secondName = 'Vergara';

console.log(person); */

/*
let selectedColors = ['red', 'blue'];
selectedColors[2]= 'green';
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log("type " + typeof selectedColors);
console.log("length " + selectedColors.length);
*/


// perform a task
/*
function greet(name, lastName){
console.log('hello ' + name + ' ' + lastName);
}
greet('john');
greet('rose', 'mary');

function square(number){
return number * number;
}

let number = square(2);
console.log(number);
*/