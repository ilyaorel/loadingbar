const greenBar = document.getElementsByClassName('left')[0];
const redBar = document.getElementsByClassName('right')[0];
const greenText = document.getElementById('green');
const redText = document.getElementById('red');
const actionBtn = document.getElementById('btn');
const actionBtn2 = document.getElementById('btn2');
const cheerText = document.getElementById('cheerUp');

let greenVal = 0;
let redVal = 100;

function calcVal() {
    if (greenVal < 100) {
        greenVal++;
        redVal--;
    }
}

function calcVal2() {
    if (greenVal < 96) {
        greenVal += 5;
        redVal -= 5;
    }
}

function setBarWidth() {
    greenBar.style.width = `${greenVal}%`;
    redBar.style.width = `${redVal}%`;
}

function setBarPercentage() {
    greenText.innerHTML = `${greenVal}%`;
}

function cheerUp() {
    if (greenVal < 33) {
        cheerText.innerHTML = 'Cmon press harder';
    } else if (greenVal < 66) {
        cheerText.innerHTML = 'There you go man!';
    } else if (greenVal < 99) {
        cheerText.innerHTML = 'LFG almost done!!!';
    } else {
        cheerText.innerHTML = 'BEAST';
    }
}

function clickFunc() {
    setBarWidth();
    setBarPercentage();
    cheerUp();
}

actionBtn.addEventListener('click', function() {
    calcVal();
    clickFunc();
});
actionBtn2.addEventListener('click', function() {
    calcVal2();
    clickFunc();
});
