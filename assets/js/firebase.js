"use strict";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCegTT8bMekYwUMOh5qmLcbeeS6aElCncU",
    authDomain: "prestonong-db.firebaseapp.com",
    projectId: "prestonong-db",
    storageBucket: "prestonong-db.appspot.com",
    messagingSenderId: "619244013693",
    appId: "1:619244013693:web:b9a7c61eb25e8654f90914",
    measurementId: "G-G2X5EJD0LM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

function insertMessage(name, email, subject, messageBody) {
    db.collection("preston-web-db").add({
        name: name,
        email: email,
        subject: subject,
        message: messageBody
    }).then((docRef) => {console.log("Doc ID: " + docRef.id)})
    .catch((error) => {console.error(error)})
};

export {insertMessage};