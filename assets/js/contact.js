"use strict";

document.getElementById("submit-btn").addEventListener("click", submit);

function submit() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    if (name.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()) {
        document.getElementById("status").innerHTML = `Thank you for your message, ${name.value}! I will get back to you ASAP. 😎`;
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
    else {
        document.getElementById("status").innerHTML = "";
    }
}