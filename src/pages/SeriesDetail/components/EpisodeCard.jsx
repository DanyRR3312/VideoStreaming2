// .src/pages/SeriesDetail/components/EpisodeCard.jsx

import React from "react";

const EpisodeCard = ({ episode, seriesTitle }) => {
  return (
    <main className="group relative border-2 rounded-lg w-65 overflow-hidden">

      {/* Imagen + Play + Duración */}
      <section className="relative">
        <img
          src={episode.thumbnail}
          alt={`Thumbnail ${episode.title}`}
          className="w-full rounded-t-md transition-transform duration-300 group-hover:scale-105"
        />

        <div
          id="play"
          className="flex items-center justify-center h-15 w-15 rounded-full bg-[rgba(0,0,0,0.342)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/player-play.svg" alt="Play" className="h-10 w-10" />
        </div>

        <div className="absolute bottom-1 right-1 bg-[rgba(0,0,0,0.5)] p-1 rounded-md">
          <p className="text-white text-sm rounded-md">{episode.duration}</p>
        </div>
      </section>

      {/* Info del episodio */}
      <section className="bg-stone-800 px-1 py-2">
        <p className="text-stone-400 text-[.75rem]">{seriesTitle}</p>
        <p className="text-white font-medium my-2">{episode.title}</p>
        <div className="flex justify-between">
          <p className="text-sm text-stone-400">Subtitulado</p>
          <img src="/more.svg" alt="Más opciones" />
        </div>
      </section>

      {/* Hover resumen */}
      <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out p-4 flex items-center justify-center text-center text-sm translate-y-4 group-hover:translate-y-0">
        <p>{episode.synopsis}</p>
      </div>
    </main>
  );
};

export default EpisodeCard;
