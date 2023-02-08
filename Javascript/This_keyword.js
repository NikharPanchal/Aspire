'use strict'
const janas = {
    fname: "Nikhar",
    lname: "Panchal",
    fullname: function () {
        console.log("In jonas object");
        console.log(this.fname + this.lname);
    }
};

const show_data = () => {
    console.log("in show data function");
    janas.fullname();
}

const person = {
    name: "Nikhar",
    walk() {
        console.log(this);
    }
};

//Chaining method
person.walk();

const walk = person.walk.bind(person);

walk();