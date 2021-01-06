import React, {useState, useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log("Error caught at auth: ", error);
}


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google as auth provider.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        //  redirects after sign-in.
        signInSuccessWithAuthResult: () => true
    },
    signInSuccessUrl: '/home',

};

function SignInScreen(props) {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    } else { 
        return (
            <div>
                <p>Welcome {firebase.auth().currentUser.displayName}</p>
                <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
        );
    }
}

export default SignInScreen;

