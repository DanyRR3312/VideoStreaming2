import React, { useEffect, useState, useRef } from "react";
import { slideData } from "../data/slideData";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const autoPlayRef = useRef(null);
  const swipeRef = useRef({ startX: 0, endX: 0 });
  const carouselRef = useRef(null);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < slideData.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slideData.length - 1));
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(nextSlide, 10000);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 10000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const currentSlide = slideData[currentIndex];

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    let isTouch = false;

    const handleTouchStart = (e) => {
      if (e.touches) {
        isTouch = true;
        swipeRef.current.startX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e) => {
      if (isTouch && e.touches) {
        swipeRef.current.endX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = (e) => {
      if (!isTouch) return;
      const { startX, endX } = swipeRef.current;
      const delta = startX - endX;

      if (Math.abs(delta) > 50) {
        if (delta > 0) nextSlide();
        else prevSlide();
        resetAutoPlay();
      }
      swipeRef.current.startX = 0;
      swipeRef.current.endX = 0;
      isTouch = false;
    };

    carouselEl.addEventListener("touchstart", handleTouchStart);
    carouselEl.addEventListener("touchmove", handleTouchMove);
    carouselEl.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselEl.removeEventListener("touchstart", handleTouchStart);
      carouselEl.removeEventListener("touchmove", handleTouchMove);
      carouselEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);


  return (
    <section
      id="carousel"
      ref={carouselRef}
      className="sm:h-[50rem] md:h-[38em] lg:h-[45em] xl:h-[51em] 2xl:h-[58em] bg-black relative overflow-hidden"
    >
      {slideData.map((slide, i) => (
        <div
          key={i}
          className={`carousel-item ${i === currentIndex ? "active" : ""}`}
        >
          <img
            src={slide.imgDesktop || slide.img}
            alt={slide.title}
            className="h-full w-full object-cover rounded-lg hidden md:flex"
          />
          <img
            src={slide.imgMobile || slide.img}
            alt={slide.title}
            className="md:hidden h-full w-full object-cover"
          />
          <div className="fade-overlay"></div>
        </div>
      ))}

      {/* Botón anterior */}
      <button
        onClick={() => {
          prevSlide();
          resetAutoPlay();
        }}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-[rgba(0,0,0,0.342)] text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none max-md:hidden 2xl:top-[45%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 md:w-8 lg:h-10 lg:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Info banner */}
      <div
        id="info"
        className={`absolute z-20 w-[20rem] text-white transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"
          } max-md:bottom-1 max-md:w-full max-md:p-1 md:bottom-[12rem] md:left-16 md:w-[18rem] lg:bottom-[12rem] lg:left-18 lg:w-[25rem] lg:text-lg xl:left-18 xl:bottom-[15rem] xl:w-[30rem] 2xl:bottom-[20rem] 2xl:w-[35rem]`}
      >
        <img
          src={currentSlide.img}
          alt={currentSlide.title}
          className="max-md:w-[12rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-full"
        />
        <h2 className="max-md:text-sm max-md:mx-2 md:mx-3 md:my-2 lg:flex lg:my-2 lg:mx-4 xl:text-[1.1rem] 2xl:text-lg">
          {currentSlide.title}
        </h2>
        <p className="mb-6 max-md:text-sm max-md:line-clamp-3 max-md:mx-2 md:mx-3 md:line-clamp-4 lg:flex lg:mx-4 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-lg">
          {currentSlide.desc}
        </p>
        <a
          href={currentSlide.page || "#"}
          id="btn-banner"
          className="max-md:mx-2 max-md:py-3 max-md:px-6 py-2 px-4 rounded-sm font-medium md:mx-3 lg:mx-4 lg:text-[1rem] xl:text-[1.2rem]"
        >
          Comenzar
        </a>
      </div>

      {/* Dots */}
      <div id="dotsContainer" className="flex p-4 mx-1">
        {slideData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => {
              showImage(i);
              resetAutoPlay();
            }}
          ></span>
        ))}
      </div>

      {/* Botón siguiente */}
      <button
        onClick={() => {
          nextSlide();
          resetAutoPlay();
        }}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-[rgba(0,0,0,0.342)] text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none max-md:hidden 2xl:top-[45%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 md:w-8 lg:h-10 lg:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroBanner;
