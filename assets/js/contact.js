"use strict";

import {insertMessage} from "./db.js";

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

// submit event listener
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submit);

let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);

// submit
function submit() {

    if (name.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()) {
        document.getElementById("status").innerHTML = `Thank you for your message, ${name.value}! I will get back to you ASAP. 😎`;
        
        // insert message to Firebase.
        insertMessage(name.value, email.value, subject.value, message.value);
    }
    else {
        document.getElementById("status").innerHTML = "";
    }
}

// clears the input and textarea fields.
function clear() {
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}