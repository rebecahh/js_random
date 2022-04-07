let heading;
let executeButton;
let input;
let output;

let colorsArray = ["red","orange","yellow","green","blue","purple"];
let daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  input = document.getElementById("myInput");
  output = document.getElementById("outputText");

  executeButton.addEventListener("click", function(){
    generateFortune();
  });

});


function generateFortune(){
  let currentInputText = input.value;
  let randomFortuneIndex = Math.floor(Math.random()*colorsArray.length);
  let randomDay = Math.floor(Math.random()*daysArray.length);
  output.innerText = currentInputText + " , your lucky color is " + colorsArray[randomFortuneIndex]
                     + " and your lucky day is " + daysArray[randomDay]
                     + ". \nKeep an eye out for your lucky color in your surroundings that day!";
  restyleOutput();
}

function restyleOutput() {
  randomColor1 = randomColor();
  randomColor2 = randomColor();
  randomColor3 = randomColor();
  output.style.color = randomColor1;
  heading.style.color = randomColor2;
  executeButton.style.backgroundColor = randomColor3;
}

function randomColor() {
  let randomRed = Math.random() * 255;
  let randomGreen = Math.random() * 255;
  let randomBlue = Math.random() * 255;

  let randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  return randomColor;
}
