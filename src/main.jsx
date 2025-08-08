// main.jsx : Punto de entrada principal de la aplicación

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";  
import "./index.css"; // Importamos los estilos globales

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>

)