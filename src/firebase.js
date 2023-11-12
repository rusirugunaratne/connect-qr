// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNZgHbGzNFc92ng1XO7orCaLSVJev6Lc0",
    authDomain: "connectqr-95992.firebaseapp.com",
    projectId: "connectqr-95992",
    storageBucket: "connectqr-95992.appspot.com",
    messagingSenderId: "580153046915",
    appId: "1:580153046915:web:b4deb00ce626c326b7e8b6",
    databaseURL: "https://connectqr-95992-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);