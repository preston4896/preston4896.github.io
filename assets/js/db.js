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
    let entryObj =
        {
            name: name,
            email: email,
            subject: subject,
            message: messageBody
        }
    let collection = unixTime_to_date_convertor(Date.now());
    db.collection(collection).add(entryObj).then((docRef) => {console.log("Doc ID: " + docRef.id)})
    .catch((error) => {console.error(error)})
};

/**-------------------------------------------------------
HELPER FUNCTIONS BELOW.
---------------------------------------------------------*/

/**
 * Converts the UNIX timestamp to current month and year.
 * @param {number} unix - milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 * @returns {string} - a date that only shows month and year. (For example: Sep 2021)
 */
function unixTime_to_date_convertor(unix) {
    let unixDate = new Date(unix);
    let year = unixDate.getFullYear();
    let m = unixDate.getMonth();
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${month[m]} ${year}`;
}

export {insertMessage};