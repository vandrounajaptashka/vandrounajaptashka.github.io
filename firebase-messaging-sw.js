import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyCWNvmJYUnLj9J3d2pKLoA4I09fGHiA-_w",
    authDomain: "noted-processor-92815.firebaseapp.com",
    databaseURL: "https://noted-processor-92815.firebaseio.com",
    projectId: "noted-processor-92815",
    storageBucket: "noted-processor-92815.appspot.com",
    messagingSenderId: "363634336895",
    appId: "1:363634336895:web:d2d5d53b051cc1b0908b4a"
  };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
console.log("worker")