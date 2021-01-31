"use strict";

document.getElementById("submit-btn").addEventListener("click", submit);

function submit() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    if (name.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()) {
        alert("Your message has been sent successfully.");
    }
    else {
        document.getElementById("status").innerHTML = "";
    }
}