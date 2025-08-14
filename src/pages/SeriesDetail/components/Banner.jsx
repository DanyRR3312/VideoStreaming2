// ./src/pages/SeriesDetail/components/Banner.jsx


import React from "react";
import "./Banner.css";


const Banner = ({ serie }) => {
    if (!serie) return null;


    return (
        <section
            className="sm:h-[50rem] md:h-[38em] lg:h-[45em] xl:h-[51em] 2xl:h-[45rem] bg-black relative overflow-hidden min-[112.5rem]:h-[50rem]"
        >
            <div className="carousel-item active">
                <img
                    src={serie.images?.bannerDesktop || serie.images?.bannerMobile}
                    alt={serie.title}
                    className="h-full w-full object-cover rounded-lg hidden md:flex"
                />
                <img
                    src={serie.images?.bannerMobile || serie.images?.bannerDesktop}
                    alt={serie.title}
                    className="md:hidden h-full w-full object-cover"
                />
                <div className="fade-overlay-banner"></div>
            </div>

            {/* Info banner */}
            <div
                id="info-banner"
                className="absolute z-20 w-[20rem] text-white max-md:bottom-1 max-md:w-full max-md:p-1 md:bottom-[12rem] md:left-16 md:w-[18rem] lg:bottom-[12rem] lg:left-18 lg:w-[25rem] lg:text-lg xl:left-18 xl:bottom-[15rem] xl:w-[30rem] 2xl:left-10 2xl:bottom-[0rem] 2xl:w-[90%] min-[112.5rem]:w-[95%]"
            >
                <img
                    src={serie.images?.titleImg}
                    alt={serie.title}
                    className="max-md:w-[12rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:max-w-[30rem] min-[112.5rem]:mx-4"
                />
                <div
                    id="tags"
                    className="flex flex-row items-center rounded-lg mx-4 my-5 text-sm min-[112.5rem]:mx-10"
                >
                    <p className="flex justify-center items-center">
                        <span className="w-fit bg-gray-700 mr-2 p-1 -skew-x-8 flex justify-center items-center">{serie.rating}</span>
                        • Sub •
                        <span className="ml-2">{serie.genres?.join(", ")}</span>
                    </p>
                </div>

                <div className="flex items-center ml-4 mb-15 min-[112.5rem]:mx-10">

                    <button className="flex bg-cyan-500 rounded-lg py-3 px-4 mr-2"><img src="/play.svg" alt="play" className="h-7 w-7 mr-2" />Comenzar a ver E1</button>

                    <button className="flex items-center justify-center w-12 h-12 rounded-lg border-3 border-cyan-500"><img src="/bookmark.svg" alt="bookmark" className="h-8 w-8" /></button>

                    <button className="ml-7"><img src="/add.svg" alt="add" className="h-8 w-8" /></button>

                    <button className="ml-7"><img src="/share.svg" alt="share" className="h-8 w-8" /></button>

                    <button className="ml-6"><img src="/more.svg" alt="more" className="h-8 w-8" /></button>

                </div>

                <div
                    id="collapse-info"
                    className="flex">

                    <div
                        id="serie-info"
                        className="max-w-[45rem] mr-25 min-[112.5rem]:max-w-1/2"
                    >

                        <h2 className="font-medium max-md:text-sm max-md:mx-2 md:mx-3 md:my-2 lg:flex lg:my-2 lg:mx-4 xl:text-[1.1rem] 2xl:text-lg min-[112.5rem]:mx-10">
                            {serie.title}
                        </h2>
                        <p className="mb-6 max-md:text-sm max-md:line-clamp-3 max-md:mx-2 md:mx-3 md:line-clamp-4 lg:flex lg:mx-4 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-base min-[112.5rem]:mx-10">
                            {serie.desc}
                        </p>

                    </div>

                    <div className="text-sm mb-10 min-[112.5rem]:mr-10">

                        <p className="text-neutral-400 mt-11"><span className="font-medium text-white">Audio:</span> Japanese,</p>
                        <p className="text-neutral-400 mt-2"><span className="font-medium text-white">Subtítulos:</span> Español (América Latina)</p>
                        <p className="text-neutral-400 mt-2"><span className="font-medium text-white">Aviso sobre el contenido:</span> 13+ Lenguaje leve, Temas adolescentes, Prejuicios sociales</p>
                        <p className="text-neutral-400 mt-2"><span className="font-medium text-white">Géneros:</span> Comedia romántica, Escolar, Recuentos de la vida, Drama</p>
                        <p className="text-neutral-400 mt-2">El anime "Kaoru Hana wa Rin to Saku" se basa en el manga del mismo nombre, escrito e ilustrado por Saka Mikami. La compañía productora del anime es CloverWorks</p>

                    </div>

                </div>

                <hr className="text-gray-500 mx-4 min-[112.5rem]:mx-10" />


            </div>

        </section>

    );
};

export default Banner;