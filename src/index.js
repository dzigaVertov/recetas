import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaEJnykOphwRQe1aV5Ia5qYLhAHzVGv_M",
  authDomain: "las-recetas-de-gomez.firebaseapp.com",
  projectId: "las-recetas-de-gomez",
  storageBucket: "las-recetas-de-gomez.appspot.com",
  messagingSenderId: "100819843606",
  appId: "1:100819843606:web:ee5891a17a3647b4df5337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);



