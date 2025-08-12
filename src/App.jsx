// App.jsx : Componente principal de la aplicación


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import RecommendedCarousel from "./components/RecommendedCarousel";
import Loader from "./components/Loader";
import SeriesDetail from "./pages/SeriesDetail/index";
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
    const timeout = setTimeout(hide, 3500);
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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <RecommendedCarousel />
              </>
            }
          />

          <Route path="/series/:id" element={<SeriesDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;