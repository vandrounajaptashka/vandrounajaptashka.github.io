importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
importScripts('/__/firebase/init.js');

const firebaseConfig = {
    apiKey: "AIzaSyCWNvmJYUnLj9J3d2pKLoA4I09fGHiA-_w",
    authDomain: "noted-processor-92815.firebaseapp.com",
    databaseURL: "https://noted-processor-92815.firebaseio.com",
    projectId: "noted-processor-92815",
    storageBucket: "noted-processor-92815.appspot.com",
    messagingSenderId: "363634336895",
    appId: "1:363634336895:web:d2d5d53b051cc1b0908b4a"
  };

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(firebaseApp);
console.log("worker")

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  Footer
  