// src/pages/index.jsx


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

  return (
    <div>
      <Banner serie={serie} />

      <SeasonSelector
        serie={serie}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />

      {/* Solo renderiza episodios de la temporada seleccionada */}
      <section key={selectedSeason.id} className="mb-8 mx-16">
        <div className="w-full flex flex-wrap gap-4 p-4">
          {selectedSeason.episodes.map((episode, idx) => (
            <EpisodeCard
              key={episode.id || idx}
              episode={episode}
              seriesTitle={serie.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SeriesDetailPage;
