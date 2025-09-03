import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ src, poster }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0); // avance %
    const [buffered, setBuffered] = useState(0); // precarga %


    useEffect(() => {
        const video = videoRef.current;
        video.preload = 'auto';

        let hls;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleCanPlay = () => setIsLoading(false);

        const handleKeyDown = (e) => {
            const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
            if (e.code === 'Space' && !isTyping) {
                e.preventDefault();
                togglePlay();
            }
        };

        const handleTimeUpdate = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        };

        const handleProgress = () => {
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                const percent = (bufferedEnd / video.duration) * 100;
                setBuffered(percent);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('progress', handleProgress);

        if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                hls.startLoad();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            video.load();
        }

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('progress', handleProgress);
            window.removeEventListener('keydown', handleKeyDown);
            if (hls) hls.destroy();
        };
    }, [src]);


    const togglePlay = () => {
        const video = videoRef.current;
        video.paused ? video.play() : video.pause();
    };

    return (
        <div id="video-container" className="w-full max-w-4xl mx-auto relative top-16 z-50">
            <div className="aspect-video bg-black rounded overflow-hidden relative">

                {/* Loader */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-opacity-75"></div>
                    </div>
                )}

                {/* Video */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls={false}
                    playsInline
                    poster={poster}
                />

                {/* Barra de progreso */}
                <div
                    className="absolute bottom-0 left-0 w-full h-2 bg-gray-800 cursor-pointer z-40"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newTime = (clickX / rect.width) * videoRef.current.duration;
                        videoRef.current.currentTime = newTime;
                    }}
                >
                    {/* Precarga */}
                    <div
                        className="absolute top-0 left-0 h-full bg-gray-500 bg-opacity-50"
                        style={{ width: `${buffered}%` }}
                    ></div>

                    {/* Progreso */}
                    <div
                        className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>


                {/* Botón personalizado */}
                <button
                    onClick={togglePlay}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 transition duration-200 z-30"
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
