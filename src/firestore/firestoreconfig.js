// Import the functions you need from the SDKs you need


// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqIooWPB3z_gBo8OC9HXmHzWw6LbxYTMs",
  authDomain: "nft-marketplace-ba187.firebaseapp.com",
  projectId: "nft-marketplace-ba187",
  storageBucket: "nft-marketplace-ba187.appspot.com",
  messagingSenderId: "720028606942",
  appId: "1:720028606942:web:f03e3fe0f7b9fda8583d4f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);