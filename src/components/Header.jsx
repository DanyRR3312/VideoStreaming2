// Header.jsx : Componente de Header para la aplicación

import React from 'react';
import "../App.css";

const Header = () => {
    return (
        <header id='header' class="flex justify-between content-center fixed top-0 left-0 z-50 w-full p-3 text-white md:bg-zinc-800 md:p-1">

            <div class="flex flex-wrap content-center p-1 font-normal Text-base">

                <button class="mx-3 hidden sm:flex lg:hidden"><img type="image/svg+xml" src="/menu.svg" alt="menu" /></button>

                <div class="my-2 mx-4">
                    <h1>VideoStream</h1>
                </div>
                <div class="my-2 mx-4 hidden lg:flex">
                    <h2>Novedades</h2>
                </div>
                <div class="my-2 mx-4 hidden lg:flex">
                    <h2>Popular</h2>
                </div>
                <div class="my-2 mx-4 hidden lg:flex">
                    <h2>Simultcasts</h2>
                </div>
                <div class="my-2 mx-4 hidden lg:flex">
                    Categorias
                </div>

            </div>

            <div class="flex content-center">

                <button class="mx-4 md:my-2 md:w-[1.5rem] md:h-[1.5rem] lg:h-7 lg:w-7 lg:my-3"><img type="image/svg+xml" src="/search.svg" alt="search" /></button>

                <div class="border-2 rounded-full w-8 h-8 my-1 mx-4 lg:w-11 lg:h-11 2xl:h-10 2xl:w-10"></div>

            </div>

        </header>
    );
};

export default Header;