  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtBEMuGaFpd4UclPi8kgDwyyXj6CRUbB4",
    authDomain: "lorax-inc-b5fb8.firebaseapp.com",
    projectId: "lorax-inc-b5fb8",
    storageBucket: "lorax-inc-b5fb8.appspot.com",
    messagingSenderId: "933426481454",
    appId: "1:933426481454:web:7ad7fc6ad3d0a869dc92bf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInButton = document.getElementById("signInButton");
  const signOutButton = document.getElementById("signOutButton");
  const message = document.getElementById("message");
  const userName = document.getElementById("userName");

  const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
  }

  const userSignOut = async() => {
    signOut(auth).then(() => {
        alert("You have signed out successfully!");
    }).catch((error) => {})
  }

  onAuthStateChanged(auth, (user) => {
    if(user) {
        signOutButton.style.display = "block";
        message.style.display = "block";
        signInButton.style.display = "none"
        userName.innerHTML = user.displayName;
    } else {
        signOutButton.style.display = "none";
        message.style.display = "none";
        signInButton.style.display = "block"
    }
  })

signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);