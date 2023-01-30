//* Question 1 *//
function nonsense (nonsenseArg){
  console.log ("What the func is this argument");
}
nonsense();

//* Question 2 *//
function twoArguments (firstName, lastName){
var sum = firstName + " " + lastName;
console.log (sum);
}
twoArguments("Maria", "Gutierrez");

//* Question 3 *//
function multiply (firstNumber, secondNumber){
  var typeofFirst = typeof firstNumber;
  var typeofSecond = typeof secondNumber;

  if (typeofFirst !== "number" || typeofSecond !== "number"){
    return "Plese supply number values";
  }
  return firstNumber * secondNumber;
}
var result = multiply(3, 5);
console.log(result);


//* Question 4 *//
function addition (firstNumber, secondNumber, thirdNumber){
  var convertedFirstNumber = parseFloat (firstNumber);
  var convertedSecondNumber = parseFloat (secondNumber);
  var convertedThirdNumber = parseFloat (thirdNumber);

  if (isNaN(convertedFirstNumber) || isNaN(convertedSecondNumber) || isNaN(convertedThirdNumber)){
    return "Invalid argument types";
  }
  return convertedFirstNumber + convertedSecondNumber + convertedThirdNumber;
}
var paragraph = document.querySelector("p");

var sum = addition (6, true, "f");
paragraph.innerHTML = sum;

//* Question 5 *//
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function(){
  var heading = document.querySelector("h1");
  heading.innerHTML += ": Updated";
}

//* Question 6 *//
var buttonTitle = document.querySelector(".title");

function changeTitle (){
  document.title = "I've been updated";
}
buttonTitle.onclick = changeTitle;

//* Question 7 *//

var buttonRed = document.querySelector(".red");
var buttonOrange = document.querySelector (".orange");
var buttonPink = document.querySelector (".pink");

function changeBackground (color){
  document.body.style.backgroundColor = color;
}
buttonRed.onclick = function (){
  changeBackground("red");
};
buttonOrange.onclick = function (){
  changeBackground("orange");
};
buttonPink.onclick = function (){
  changeBackground("pink");
};