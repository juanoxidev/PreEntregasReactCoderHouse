import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpysSJEQp96BPOXYFHdZIGzAor3McbG_Q",
  authDomain: "sissivelas.firebaseapp.com",
  projectId: "sissivelas",
  storageBucket: "sissivelas.appspot.com",
  messagingSenderId: "187110631490",
  appId: "1:187110631490:web:adaa0c728bc93a318325db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </CartProvider>
);
