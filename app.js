// Question 1

// function addNumber(num) {
//   return function(value) {
//     return num + value;
//   }
// }
// let addFive = addNumber(5);

// console.log(addFive(20));


// Question 2


// const arr = [1, 2, 3, 4, 5, 6, 7];

// function searchArray(arr, value) {
//   if (arr.length === 0) {
//     return console.log(false);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Array.isArray(element)) {
//       if (searchArray(element, value)) {
//         return console.log(true);
//       }
//     } else {
//       if (element === value) {
//         return console.log(true);
//       }
//     }
//   }
//   return console.log(false);
// }

// searchArray(arr,4);


// Question 3

// let newParagraph = document.getElementById("myPara");
// function addintoParagraph(value) {
//   const p = document.createElement("p");
//   p.innerHTML = value;
//   newParagraph.appendChild(p);
// }

// addintoParagraph("Hello Javascript ");
// addintoParagraph("Hello Javascript ");
// addintoParagraph("Hello Javascript ");


// Question 4


// let ul = document.getElementById("list");
// function addintoul(value) {
//   const p = document.createElement("li");
//   p.innerHTML = value;
//   ul.appendChild(p);
// }
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");
// addintoul("Hello Javascript developers");



// Question 5

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }

// const myElement = document.getElementById("myHeading");

// changeBackgroundColor(myElement, "green");

// function changeTextColor(element, color) {
//   element.style.color = color;
// }

// const my_Element = document.getElementById("myHeading");

// changeTextColor(myElement, "white");


// Question 6

// function saveObjectToLocalStorage(key, object) {
//   const objectString = JSON.stringify(object);
//   localStorage.setItem(key, objectString);
// }

// const myObject = { name: "uamr", age: 25 };
// saveObjectToLocalStorage("key", myObject);


// Question 7

// function getObjectToLocalStorage(key) {
//  const objectString =  localStorage.getItem(key);
//   console.log(objectString)
// }

// getObjectToLocalStorage('key')


// Question 8

// function saveObjectPropertiesToLocalStorage(object) {
//     for (let key in object) {
//         localStorage.setItem(key, JSON.stringify(object[key]));
//     }

//     const newObject = {};

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = JSON.parse(localStorage.getItem(key));
//         newObject[key] = value;
//     }

//     return newObject;
// }
// const myObject = { name: 'umar', age: 25, rollno: 2 };
// const newObject = saveObjectPropertiesToLocalStorage(myObject);
// console.log(newObject);
