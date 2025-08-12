// src/pages/index.jsx


import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import { slideData } from "../../data/slideData";

export default function SeriesDetail() {

    const { id } = useParams();
    const serie = slideData.find(s => s.page.includes(id));

    return (
        <>
            <Banner serie={serie} />
            <div className="text-white p-4">
                <h1 className="text-3xl font-bold mb-4">Detalle de la Serie</h1>
                <p>ID de la serie: {id}</p>
                {/* Aquí puedes agregar más detalles de la serie usando el ID */}
                
            </div>
        </>
    );
}
