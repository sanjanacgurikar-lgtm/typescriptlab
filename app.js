"use strict";
function greet(name) {
    return "Hello, " + name + "!";
}
let message = greet("Student");
document.getElementById("output").innerHTML = message;
console.log(message);
