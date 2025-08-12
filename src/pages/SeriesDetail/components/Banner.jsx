// ./src/pages/SeriesDetail/components/Banner.jsx


import React from "react";
import "./Banner.css";

const Banner = ({ serie }) => {
    if (!serie) return null;

    return (
        <section
            className="sm:h-[50rem] md:h-[38em] lg:h-[45em] xl:h-[51em] 2xl:h-[58em] bg-black relative overflow-hidden"
        >
            <div className="carousel-item active">
                <img
                    src={serie.imgDesktop || serie.img}
                    alt={serie.title}
                    className="h-full w-full object-cover rounded-lg hidden md:flex"
                />
                <img
                    src={serie.imgMobile || serie.img}
                    alt={serie.title}
                    className="md:hidden h-full w-full object-cover"
                />
                <div className="fade-overlay"></div>
            </div>

            {/* Info banner */}
            <div
                className="absolute z-20 w-[20rem] text-white max-md:bottom-1 max-md:w-full max-md:p-1 md:bottom-[12rem] md:left-16 md:w-[18rem] lg:bottom-[12rem] lg:left-18 lg:w-[25rem] lg:text-lg xl:left-18 xl:bottom-[15rem] xl:w-[30rem] 2xl:bottom-[20rem] 2xl:w-[35rem]"
            >
                <img
                    src={serie.img}
                    alt={serie.title}
                    className="max-md:w-[12rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:max-w-[23rem]"
                />
                <div>
                    <p>13+ • Sub • <span>Comedia romántica, Escolar, Recuentos de la vida, Drama</span></p>
                </div>

                <div>

                    <button><img src="/play.svg" alt="" />Comenzar a ver E1</button>

                    <button><img src="/bookmark.svg" alt="" /></button>

                    <button><img src="/add.svg" alt="" /></button>

                    <button><img src="/share.svg" alt="" /></button>

                    <button><img src="/more.svg" alt="" /></button>

                </div>

                <div>

                    <div>

                        <h2 className="max-md:text-sm max-md:mx-2 md:mx-3 md:my-2 lg:flex lg:my-2 lg:mx-4 xl:text-[1.1rem] 2xl:text-lg">
                            {serie.title}
                        </h2>
                        <p className="mb-6 max-md:text-sm max-md:line-clamp-3 max-md:mx-2 md:mx-3 md:line-clamp-4 lg:flex lg:mx-4 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-lg">
                            {serie.desc}
                        </p>

                    </div>

                    <div>

                        <p>Audio: Japanese,</p>
                        <p>Subtítulos: Español (América Latina)</p>
                        <p>Aviso sobre el contenido: 13+ Lenguaje leve, Temas adolescentes, Prejuicios sociales</p>
                        <p>Géneros: Comedia romántica, Escolar, Recuentos de la vida, Drama</p>
                        <p>El anime "Kaoru Hana wa Rin to Saku" se basa en el manga del mismo nombre, escrito e ilustrado por Saka Mikami. La compañía productora del anime es CloverWorks</p>

                    </div>

                </div>


            </div>
        </section>

    );
};

export default Banner;