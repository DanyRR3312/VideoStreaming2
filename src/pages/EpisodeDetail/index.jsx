// src/pages/EpisodeDetail/index.jsx
import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./components/VideoContainer";
import seriesDetail from "../../data/SeriesDetail";

const EpisodeDetail = () => {
  const { seriesId, seasonId, episodeId } = useParams();

  const serie = seriesDetail.find((s) => s.id === seriesId);
  const season = serie?.seasons.find((s) => s.id === seasonId);
  const episode = season?.episodes.find((e) => e.id === episodeId);

  if (!episode) {
    return (
      <div className="text-white p-8">
        <h1 className="text-2xl font-bold">Episodio no encontrado</h1>
      </div>
    );
  }


  return (
    <>
      <VideoPlayer src={episode.videoUrl} poster={season?.poster} />
      <div className="text-white p-4">
        <h1 className="text-2xl font-bold">{episode.title}</h1>
        <p className="mt-2">Serie: {serie?.title}</p>
        <p>Temporada: {season?.SeasonTitle}</p>
        <p>Episodio: {episodeId}</p>
      </div>
    </>
  );
};

export default EpisodeDetail;