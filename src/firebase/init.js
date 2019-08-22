import firebase from 'firebase/app'
import 'firebase/auth'



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js"></script>

/// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDF2oEsAFJHUVzOmHnlZIZQXgmNZkpLcU4",
    authDomain: "bwizly.firebaseapp.com",
    databaseURL: "https://bwizly.firebaseio.com",
    projectId: "bwizly",
    storageBucket: "",
    messagingSenderId: "287168854865",
    appId: "1:287168854865:web:aa867cf4cf450601"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// </script>