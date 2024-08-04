// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVQYSMcknPP2nw8898lIy_klQ_5OwryTI",
    authDomain: "pantry-manager-ec923.firebaseapp.com",
    projectId: "pantry-manager-ec923",
    storageBucket: "pantry-manager-ec923.appspot.com",
    messagingSenderId: "151521594493",
    appId: "1:151521594493:web:0514491081882d8c423514",
    measurementId: "G-PD14JMT0DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore };