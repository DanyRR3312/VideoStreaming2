// src/components/RecommendedCarousel.jsx

import React, { useRef } from "react";
import { recommendedList } from "../data/recommendedList";
import "./RecommendedCarousel.css"; // Para los estilos personalizados

const RecommendedCarousel = ({ title = "Recomendados", items = recommendedList }) => {
  const containerRef = useRef(null);

  const getCardWidth = () => {
    const w = window.innerWidth;
    if (w >= 1800) return 18 * 16 + 24;
    if (w >= 1280) return 16 * 16 + 24;
    if (w >= 1024) return 14 * 16 + 24;
    if (w >= 768) return 12 * 16 + 16;
    return 10 * 16 + 12;
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: getCardWidth(), behavior: "smooth" });
  };

  return (
    <section
      id="recommended"
      className="absolute antialiased z-50 max-md:mt-2 md:top-[31rem] lg:top-[38rem] xl:top-[42rem] 2xl:top-[45rem]"
    >
      <div className="w-full relative">
        <h2
          id="recommended-title"
          className="text-3xl font-bold py-4 pl-24 text-white text-left max-md:pl-3 max-md:text-lg md:pl-19 md:text-xl lg:pl-22 xl:text-2xl xl:pl-23"
        >
          {title}
        </h2>

        <div className="relative bg-black">
          {/* Botón izquierdo */}
          <button
            onClick={scrollLeft}
            className="absolute md:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white md:p-2 lg:p-3 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 max-md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carrusel */}
          <div
            ref={containerRef}
            id="carousel-rec"
            className="w-screen flex overflow-x-auto scroll-smooth hide-scroll-ba pb-4 max-md:pt-1 max-md:px-3 md:pt-6 md:px-19 lg:px-22 xl:px-23 relative carousel-container"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="recommended-card flex-none bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 max-md:h-[16rem] max-md:w-[10rem] max-md:mr-3 md:h-[18rem] md:w-[12rem] md:mr-4 lg:mr-6 lg:h-[22rem] lg:w-[14rem] xl:h-[24rem] xl:w-[16rem]"
              >
                <div className="img-container w-full h-full relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="recommended-img object-cover transition-all duration-300"
                  />
                  <div className="recommended-title-overlay transition-all duration-300 max-md:px-1 max-md:py-2 md:py-[0.75rem] md:px-2">
                    <h3 className="line-clamp-1 max-md:text-sm xl:text-base font-bold">{item.title}</h3>
                    <p className="text-sm max-md:text-xs">{item.sub}</p>
                  </div>
                  <div className="recommended-desc flex flex-col">
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <span className="text-sm max-lg:line-clamp-6 max-xl:line-clamp-10">{item.desc}</span>
                    <div className="btn-comenzar flex content-center bg-black text-white hover:bg-white hover:text-black py-2 px-3 text-sm rounded-md absolute left-3 bottom-4">
                      <img src="/play.svg" alt="play" className="mr-2" />
                      {item.start}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Botón derecho */}
          <button
            onClick={scrollRight}
            className="absolute md:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white md:p-2 lg:p-3 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 max-md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedCarousel;
