import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1kXy0DNpYO3nJvAuZGJR6ItOfCim5q8A",
    authDomain: 'finmin-c0869.firebaseapp.com',
    databaseURL: "https://finmin-c0869.firebaseio.com",
    projectId: "finmin-c0869",
    storageBucket: "finmin-c0869.appspot.com",
    messagingSenderId: "491073959775",
    appId: "1:491073959775:web:7f1967c5b616b8f9f368ea",
    measurementId: "G-GSFH2KL7MJ"
};
var fBApp = null;
try {
    fBApp = firebase.initializeApp(config);
} catch (error) {
    console.log("Error caught at auth: ", error);
}

export default fBApp.auth;