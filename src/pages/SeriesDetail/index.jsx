// src/pages/SeriesDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function SeriesDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-2xl">
        Detalle de la serie: <span className="font-bold">{id}</span>
      </h1>
    </div>
  );
}
