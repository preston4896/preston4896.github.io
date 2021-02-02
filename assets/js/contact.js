"use strict";

import {insertMessage} from "./firebase.js";

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

// error messages
let nameErr = document.getElementById("name-error");
let emailErr = document.getElementById("email-error");
let subjectErr = document.getElementById("subject-error");
let messageErr = document.getElementById("message-error");

// submit event listener
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submit);

let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);

// submit
function submit() {

    if (name.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()) {
        nameErr.innerHTML = "";
        emailErr.innerHTML = "";
        subjectErr.innerHTML = "";
        messageErr.innerHTML = "";
        document.getElementById("status").innerHTML = `Thank you for your message, ${name.value}! I will get back to you ASAP. 😎`;
        
        // insert message to Firebase.
        insertMessage(name.value, email.value, subject.value, message.value);
    }
    else {
        document.getElementById("status").innerHTML = "";
        
        // custom invalidation messages.
        if (!name.checkValidity()) {
            let error = "Oh nah nah! What's your name?";
            nameErr.innerHTML = error.fontcolor("red");
        }
        if (!email.checkValidity()) {
            let error = "Please enter a valid email.";
            emailErr.innerHTML = error.fontcolor("red");
        }
        if (!subject.checkValidity()) {
            let error = "Uhhh.... what's the agenda?";
            subjectErr.innerHTML = error.fontcolor("red");
        }
        if (!message.checkValidity()) {
            let error = "I am not a mind reader, please insert details.";
            messageErr.innerHTML = error.fontcolor("red");
        }
    }
}

// clears the input and textarea fields.
function clear() {
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    subjectErr.innerHTML = "";
    messageErr.innerHTML = "";
}