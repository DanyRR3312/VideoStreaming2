// src/pages/EpisodeDetail/index.jsx
import React from "react";
import { useParams } from "react-router-dom";

const EpisodeDetail = () => {
  const { seriesId, seasonId, episodeId } = useParams();

  return (
    <>
      <div className="text-white p-4">
        <h1 className="text-2xl font-bold">Página de Episodio</h1>
        <p className="mt-2">Serie: {seriesId}</p>
        <p>Temporada: {seasonId}</p>
        <p>Episodio: {episodeId}</p>
      </div>
    </>
  );
};

export default EpisodeDetail;