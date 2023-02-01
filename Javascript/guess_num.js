'use strict'
const guess = Math.floor(Math.random() * 10);
function checkNum() {
    let input1 = Number(document.getElementById('input_val').value);
    console.log(guess);
    // console.log(input1);
    if (guess === input1) {
        console.log("Wow Number is mathched....")
        document.getElementById("result").innerHTML = guess;

    }
    else if (input1 < guess) {
        console.log("Too far from the guess")
    }
    else if (input1 > guess) {
        console.log("Too close from the guess number");
    }
    else {
        console.log("wrong input")
    }
}