// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const displayString = () => {
  let num = 15;
  let text = num.toString();

  document.getElementById("display-string").innerHTML = (`The typeof ${text} is ${typeof text}`);

// console.log(text, num)
}



// Write a JavaScript program to convert a string to the number.
const displayNumber = () =>{
  let str = '15';
  let pud = parseInt(str);

  document.getElementById("display-number").innerHTML = (`The typeof ${pud} is ${typeof pud}`);

  // console.log(str, pud)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const displayBoo = () =>{
  let foo = 25;
  foo = true;
  document.getElementById("display-boo").innerHTML = (`The typeof ${foo} is ${typeof foo}`);

    // console.log(foo)
}

const displayNull = () =>{
  let nul = null;
  document.getElementById("display-null").innerHTML = (`The typeof ${nul} is ${typeof nul}`);
}

const displayUndefined = () => {
  let x;
  if(typeof x === undefined){
  }

  document.getElementById("display-undefined").innerHTML = (`The typeof ${x} is ${typeof x}`);

  console.log(x);
}

const displayNum = () => {
  let nmu = 69;
  document.getElementById("display-num").innerHTML = (`The typeof ${nmu} is ${typeof nmu}`);
}

// const displayNan = () => {
//   let arr = Number.isNaN('poop');

//   document.getElementById("display-nan").innerHTML = (`The typeof ${arr} is ${typeof arr}`);
// }

// function sanitise(x) {
//   if (isNaN(x)) {
//     return NaN;
//   }
//   return x;
// }

// console.log(sanitise('1'));
// // expected output: "1"

// console.log(sanitise('NotANumber'));
// // expected output: NaN


const displayStr = () => {
  let srt = '69';
  document.getElementById("display-srt").innerHTML = (`The typeof ${srt} is ${typeof srt}`);
}



// Write a JavaScript program that adds 2 numbers together.
const displayAdd = () =>{
  let num1 = 60;
  let num2 = 9;
  let sum = num1 + num2;
  document.getElementById("display-add").innerHTML = (`The sum of ${num1} and ${num2} is ${sum}`);
}

// Write a JavaScript program that runs only when 2 things are true.
                  // and function
// If this is true && this is true

// Write a JavaScript program that runs when 1 of 2 things are true.
                  // or function
// If this is true || this is true

// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
