// src/pages/index.jsx


import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import seriesDetail from "../../data/SeriesDetail";

const SeriesDetailPage = () => {
  const { id } = useParams();
  const serie = seriesDetail.find(s => s.id === id);

  return (
    <div>
      <Banner serie={serie} />
      {/* Otros componentes */}
    </div>
  );
};

export default SeriesDetailPage;
