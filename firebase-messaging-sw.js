// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCWNvmJYUnLj9J3d2pKLoA4I09fGHiA-_w",
    authDomain: "noted-processor-92815.firebaseapp.com",
    databaseURL: "https://noted-processor-92815.firebaseio.com",
    projectId: "noted-processor-92815",
    storageBucket: "noted-processor-92815.appspot.com",
    messagingSenderId: "363634336895",
    appId: "1:363634336895:web:d2d5d53b051cc1b0908b4a"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Vandrounaja Ptashka';
//     const notificationOptions = {
//       body: 'Новы Эпизод',
//       icon: 'https://vandrounajaptashka.github.io//assets/img/ptashka_500.jpg'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });
  