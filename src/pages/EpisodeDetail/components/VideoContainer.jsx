import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, [src]);

    const togglePlay = () => {
        const video = videoRef.current;
        video.paused ? video.play() : video.pause();
    };

    return (


        <div id="video-container" className="w-full max-w-4xl mx-auto relative top-16 z-50">
            <div className="aspect-video bg-black rounded overflow-hidden">
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain" // 👈 clave aquí
                    controls={false}
                    playsInline
                />

                {/* Botón personalizado */}
                <button
                    onClick={togglePlay}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 transition duration-200"
                >
                    {isPlaying ? (
                        <img src="/video-player-pause.svg" alt="Pause" className="w-15 h-15" />
                    ) : (
                        <img src="/video-player-play.svg" alt="Play" className="w-15 h-15" />
                    )}
                </button>
            </div>
        </div>




    );
};

export default VideoPlayer;
