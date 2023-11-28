// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");
const dbOperations = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7Sati2sjIecYlngvRpx2N9RAtqRoltU4",
    authDomain: "server-311e7.firebaseapp.com",
    databaseURL: "https://server-311e7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "server-311e7",
    storageBucket: "server-311e7.appspot.com",
    messagingSenderId: "361799252824",
    appId: "1:361799252824:web:d7230241ada2f12ff4c32d",
    measurementId: "G-7J9NQFE8JE"
};
let db = null;

// Initialize Firebase
const initApp = async function init() {
    try {
        firebase.initializeApp(firebaseConfig);
        db = dbOperations.getDatabase();
        console.log('Connected to Firebase');
        module.exports = {db, dbOperations}
        return true;
    } catch (e) {
        console.log('Couldn\'t connect to Firebase');
        module.exports = {db}
        return false;
    }
}

module.exports = {initApp};

