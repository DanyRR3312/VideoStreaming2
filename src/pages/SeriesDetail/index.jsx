// src/pages/SeriesDetail/index.jsx


// src/pages/SeriesDetail/index.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import seriesDetail from "../../data/SeriesDetail";
import EpisodeCard from "./components/EpisodeCard";
import SeasonSelector from "./components/SeasonSelector";

const SeriesDetailPage = () => {
  const { id } = useParams();
  const serie = seriesDetail.find((s) => s.id === id);

  const seasons = serie?.seasons || [];
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  if (!serie) {
    return (
      <div className="text-white p-8">
        <h1 className="text-2xl font-bold">Serie no encontrada</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* Banner principal con imagen y título */}
      <Banner serie={serie} />

      {/* Selector de temporada */}
      <SeasonSelector
        serie={serie}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />

      {/* Episodios de la temporada seleccionada */}
      <section key={selectedSeason.id} className="mb-8 mx-16">
        <div className="w-full flex flex-wrap gap-4 p-4">
          {selectedSeason.episodes.map((episode, idx) => (
            <EpisodeCard
              key={episode.id || idx}
              episode={episode}
              seriesTitle={serie.title}
              seriesId={serie.id}           // ✅ Prop necesario para navegar
              seasonId={selectedSeason.id}  // ✅ Prop necesario para navegar
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SeriesDetailPage;
