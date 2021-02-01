"use strict";

// submit button event listener
document.getElementById("submit-btn").addEventListener("click", submit);

// submit
function submit() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    // error messages
    let nameErr = document.getElementById("name-error");
    let emailErr = document.getElementById("email-error");
    let subjectErr = document.getElementById("subject-error");
    let messageErr = document.getElementById("message-error");

    if (name.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()) {
        document.getElementById("status").innerHTML = `Thank you for your message, ${name.value}! I will get back to you ASAP. 😎`;
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
        nameErr.value = "";
        emailErr.value = "";
        subjectErr.value = "";
        messageErr.value = "";
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