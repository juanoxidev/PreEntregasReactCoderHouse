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
  apiKey: "AIzaSyDQU-wdC5bNMwt0ogW2_aWd4hfIoyHaFCA",
  authDomain: "prueba-765b7.firebaseapp.com",
  projectId: "prueba-765b7",
  storageBucket: "prueba-765b7.appspot.com",
  messagingSenderId: "170849708732",
  appId: "1:170849708732:web:1c4f50599fe3b8a45afeb9",
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
