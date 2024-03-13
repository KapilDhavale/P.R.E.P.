// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signOut } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "prep-f4c61.firebaseapp.com",
  databaseURL: "https://prep-f4c61-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prep-f4c61",
  storageBucket: "prep-f4c61.appspot.com",
  messagingSenderId: "Your Messaging Sender ID",
  appId: "Your App ID"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

// Function to sign out the current user
export const logout = () => {
  return signOut(auth);
};

export default firebaseApp;