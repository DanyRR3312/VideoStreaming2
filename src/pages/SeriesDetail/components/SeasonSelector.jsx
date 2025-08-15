// ./src/pages/SeriesDetail/components/Seasons.jsx : Componente para seleccionar la la temporada de la serie 

import React, { useState } from "react";

const SeasonSelector = ({ serie, selectedSeason, setSelectedSeason }) => {
  const seasons = serie?.seasons || [];
  const hasMultipleSeasons = seasons.length > 1;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    if (hasMultipleSeasons) setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        id="DropDown"
        className="mt-15 mx-20 py-3 pr-3 w-fit cursor-pointer"
        onClick={toggleDropDown}
      >
        <div className="flex items-center content-center">
          {hasMultipleSeasons && (
            <img
              src="/arrow-down.svg"
              alt="arrow"
              className={`h-7 w-7 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
          <h1 className="text-white font-medium text-lg ml-1">
            {selectedSeason.SeasonTitle}
          </h1>
        </div>
      </div>

      {hasMultipleSeasons && isOpen && (
        <div
          id="DropDown-content"
          className="bg-zinc-700 mx-20 w-fit max-w-[40rem] rounded-md overflow-hidden"
        >
          {seasons.map((season) => (
            <div
              key={season.id}
              className="flex items-center content-center text-white p-4 hover:bg-zinc-600 transition-colors cursor-pointer"
              onClick={() => {
                setSelectedSeason(season);
                setIsOpen(false);
              }}
            >
              <p className="line-clamp-1">{season.SeasonTitle}</p>
              <p className="ml-8 text-[.8rem] text-zinc-300">
                {season.episodes.length} Capítulos
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SeasonSelector;