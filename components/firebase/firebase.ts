// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';

// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAbEwzBh0sHFAAB-WU5tK9ddUfSWZlUptE',
    authDomain: 'miniextension-7c3ac.firebaseapp.com',
    projectId: 'miniextension-7c3ac',
    storageBucket: 'miniextension-7c3ac.appspot.com',
    messagingSenderId: '494798372343',
    appId: '1:494798372343:web:e15391902000e066ab42f2',
    measurementId: 'G-ZR4BPV453E',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'FILL_ME_IN';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
