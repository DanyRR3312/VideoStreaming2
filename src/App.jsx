// App.jsx : Componente principal de la aplicación

import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroBanner />
    </div>
  );
}

export default App;