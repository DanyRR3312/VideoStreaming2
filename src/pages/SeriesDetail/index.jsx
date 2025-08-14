// src/pages/index.jsx


import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import seriesDetail from "../../data/SeriesDetail";
import EpisodeCard from "./components/EpisodeCard";

const SeriesDetailPage = () => {
  const { id } = useParams();
  const serie = seriesDetail.find(s => s.id === id);

  return (
    <div>
      <Banner serie={serie} />

      {/* Contenedor de episodios por temporada */}
      {serie?.seasons?.map(season => (
        <section key={season.id} className="mb-8 mx-16">
          <h2 className="text-xl font-bold px-4 py-2">{season.title}</h2>

          <div className="w-full flex flex-wrap gap-4 p-4">
            {season.episodes.map((episode, idx) => (
              <EpisodeCard
                key={episode.id || idx}
                episode={episode}
                seriesTitle={serie.title}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SeriesDetailPage;
