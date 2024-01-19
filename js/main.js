// Write your DOM code here!
const redButton = document.querySelector('.js-button.red');
const whiteButton = document.querySelector('.js-button.white');
const blueButton = document.querySelector('.js-button.blue');
const yellowButton = document.querySelector('.js-button.yellow');
const greenButton = document.querySelector('.js-button.green');
const orangeButton = document.querySelector('.js-button.orange');
const purpleButton = document.querySelector('.js-button.purple');

redButton.addEventListener('click', changeRed);
whiteButton.addEventListener('click', changeWhite);
blueButton.addEventListener('click', changeBlue);
yellowButton.addEventListener('click', changeYellow);
greenButton.addEventListener('click',changeGreen)
orangeButton.addEventListener('click',changeOrange)
purpleButton.addEventListener('click',changePurple)

function changeRed() {
//   $('body').css('background', 'red');
//   $('body').css('color', 'white');
    document.body.style.backgroundColor = 'red'
}
function changeWhite() {
//   $('body').css('background', 'white');
//   $('body').css('color', 'black');
     document.body.style.backgroundColor = 'white'
}
function changeBlue() {
//   $('body').css('background', 'blue');
//   $('body').css('color', 'white');
     document.body.style.backgroundColor = 'blue'
}
function changeYellow() {
//   $('body').css('background', 'yellow');
//   $('body').css('color', 'black');
     document.body.style.backgroundColor = 'yellow'
}
function changeGreen() {
    // $('body').css('background', 'green');
    // $('body').css('color', 'white');
    document.body.style.backgroundColor = 'green'
  }

function changeOrange() {
    // $('body').css('background', 'Orange');
    // $('body').css('color', 'black');
    document.body.style.backgroundColor = 'Orange'
  }

function changePurple() {
    // $('body').css('background', 'purple');
    // $('body').css('color', 'black');
    document.body.style.backgroundColor = 'purple'
  }
