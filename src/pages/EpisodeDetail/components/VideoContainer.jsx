

import React from "react";

const VideoContainer = () => {


    return (

        <>
        
            <section className="aspect-video h-50">

                <div className="player relative w-full h-0 pt-[56.25%] bg-black group">

                    <video id="my-video" className="absolute top-0 left-0 w-full h-full object-fit"></video>

                    <div id="control-overlay" className="control-overlay absolute inset-0 flex items-center justify-evenly bg-[rgba(0, 0, 0, 0.185)] transition-opacity duration-300 z-10">

                        <button id="rewind-button" className="p-4 bg-opacity-75 text-white text-4xl hover:bg-opacity-100 transition-colors duration-200">

                            <img src="#" alt=""  className="h-[72px]"/>

                        </button>

                        <button id="play-paused-button" className="p-4 rounded-full bg-opacity-75 text-white text-6xl hover:bg-opacity-100 transition-colors duration-200">

                            <img src="" alt="" className="h-[72px]"/>

                            <img src="/video-player-play.svg" alt="" className="h-[72px]"/>

                        </button>

                        <button id="forward-button" className="p-4 rounded-full bg-opacity-75 text-white text-4xl hover:bg-opacity-100 transition-colors duration-200">

                            <img src="" alt="" className="h-[72px]"/>

                        </button>

                        <button id="settings-button" className="absolute top-1 right-10 p-2 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-200 z-10">

                            <img src="" alt="" className="h-6 w-6"/>

                        </button>

                        <div id="settings-panel">

                            <button id="close-settings" className="absolute top-2 left-2 p-2 rounded hover:bg-gray-700 transition duration-200">

                                <img src="" alt="" className="h-5 w-5"/>

                                <h3 className="mb-4 text-base font-bold mt-8">Calidad de video</h3>

                                <div id="quality-options" className="space-y-2"></div>

                            </button>

                        </div>

                        <button id="fullscreen-button" className="absolute top-1 right-1 p-2 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-200">

                            <img src="" alt="" className="h-6 w-6"/>

                        </button>

                        <div id="preview-container" className="absolute -top-[96px] left-0 w-[160px] h-[90px] bg-black rounded overflow-hidden opacity-100 transition-opacity duration-200 z-50 pointer-events-none">

                            <canvas id="preview-canvas" width="160" height="90"></canvas>

                        </div>

                        <div id="progress-container" className="absolute bottom-0 left-0 w-full h-2 bg-black bg-opacity-40 cursor-pointer z-20">

                            <div id="time-tooltip" className="absolute -top-6 left-0 px-2 py-1 bg-black text-white text-xs rounded opacity-0 transition-opacity duration-150 pointer-events-none z-10">00:00</div>

                            <div id="progress-bar" className="h-full bg-red-500 transition-all duration-100 ease-linear" style="width: 0%;"></div>

                            <div d="progress-thumb" className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-100 ease-linear"></div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

};

export default VideoContainer;