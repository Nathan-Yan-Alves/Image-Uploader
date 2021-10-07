const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyBuJCqgkW44cFCblFX1yzqep9Ho0czOzf0",
    authDomain: "image-uploader-66fbb.firebaseapp.com",
    projectId: "image-uploader-66fbb",
    storageBucket: "image-uploader-66fbb.appspot.com",
    messagingSenderId: "529745696006",
    appId: "1:529745696006:web:32578ee2d74ca6aff7ba87",
};

const app = initializeApp(firebaseConfig);
module.exports = app;
