// App.jsx : Componente principal de la aplicación


import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import RecommendedCarousel from "./components/RecommendedCarousel";
import Loader from "./components/Loader";
import { slideData } from "./data/slideData";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let done = false;
    const hide = () => {
      if (!done) {
        setLoading(false);
        done = true;
      }
    };

    // 1) Pre-carga de imágenes críticas del Hero
    const urls = slideData
      .flatMap(s => [s.img, s.imgDesktop, s.imgMobile])
      .filter(Boolean);

    const preloadPromises = urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = src;
        })
    );

    Promise.allSettled(preloadPromises).then(hide);

    // 2) Fallback por tiempo (por si algo queda colgado)
    const timeout = setTimeout(hide, 3500);

    // 3) Como extra, si igualmente load ocurre antes, ocultamos
    const onLoad = () => hide();
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="bg-black">
        <Header />
        <HeroBanner />
        <RecommendedCarousel />
      </div>
    </>
  );
}

export default App;