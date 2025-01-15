import React from "react";  // Import react into the bundle
import ReactDOM from "react-dom/client";  // Import ReactDOM
import "../styles/index.css";  // Include your styles into the webpack bundle
import Home from "./component/Home.jsx";  // Import your own components

// Render your react application
//                 // donde ?                       // Qué  
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

