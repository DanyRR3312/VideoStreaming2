import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ src, poster, vttUrl, thubs = [] }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [buffered, setBuffered] = useState(0);

    const [thumbnails, setThumbnails] = useState([]);
    const [preview, setPreview] = useState(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragPercent, setDragPercent] = useState(null); // para mover el thumb en tiempo real

    const thumbsBg = thubs.length ? thubs.map(url => `url(${url})`).join(', ') : undefined;

    useEffect(() => {
        if (!vttUrl) return;
        fetch(vttUrl)
            .then(res => res.text())
            .then(text => {
                const lines = text.split("\n").filter(l => l.trim() !== "" && !l.startsWith("WEBVTT"));
                const data = [];
                for (let i = 0; i < lines.length; i += 2) {
                    const [start, end] = lines[i].split(" --> ");
                    const [file, coords] = lines[i + 1].split("#xywh=");
                    const [x, y, w, h] = coords.split(",").map(Number);
                    data.push({
                        start: parseTime(start),
                        end: parseTime(end),
                        x, y, w, h,
                        src: file
                    });
                }
                setThumbnails(data);
            });
    }, [vttUrl]);

    const parseTime = (t) => {
        const [h, m, s] = t.split(":");
        return parseFloat(h) * 3600 + parseFloat(m) * 60 + parseFloat(s);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging || !videoRef.current) return;
            const rect = document.getElementById('progress-bar-container').getBoundingClientRect();
            const offsetX = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
            const percent = (offsetX / rect.width) * 100;
            setDragPercent(percent);
            setPreview(null);
        };

        const handleMouseUp = () => {
            if (isDragging && videoRef.current) {
                const newTime = (dragPercent / 100) * videoRef.current.duration;
                videoRef.current.currentTime = newTime;
                setIsDragging(false);
                setDragPercent(null);
            }
        };

        const handleTouchMove = (e) => {
            if (!isDragging || !videoRef.current) return;
            const touch = e.touches[0];
            const rect = document.getElementById('progress-bar-container').getBoundingClientRect();
            const offsetX = Math.min(Math.max(0, touch.clientX - rect.left), rect.width);
            const percent = (offsetX / rect.width) * 100;
            setDragPercent(percent);
            setPreview(null);
        };

        const handleTouchEnd = () => {
            if (isDragging && videoRef.current) {
                const newTime = (dragPercent / 100) * videoRef.current.duration;
                videoRef.current.currentTime = newTime;
                setIsDragging(false);
                setDragPercent(null);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, dragPercent]);

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
        <div id="video-container" className="w-full max-w-4xl mx-auto relative top-16 z-50 select-none">

            <div className="aspect-video bg-black rounded overflow-hidden relative">

                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-opacity-75"></div>
                    </div>
                )}

                <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls={false}
                    playsInline
                    poster={poster}
                />

                <div
                    id="progress-bar-container"
                    className="absolute bottom-0 left-0 w-full h-2 bg-gray-800 cursor-pointer z-40"
                    onMouseMove={(e) => {
                        if (!videoRef.current || !thumbnails.length || isDragging) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const posX = e.clientX - rect.left;
                        const percent = posX / rect.width;
                        const time = percent * videoRef.current.duration;

                        const thumb = thumbnails.find(t => time >= t.start && time < t.end);
                        if (thumb) {
                            const tooltipWidth = 160;
                            const padding = 8;
                            let adjustedLeft = posX;

                            if (posX < tooltipWidth / 2 + padding) {
                                adjustedLeft = tooltipWidth / 2 + padding;
                            }
                            if (posX > rect.width - tooltipWidth / 2 - padding) {
                                adjustedLeft = rect.width - tooltipWidth / 2 - padding;
                            }

                            setPreview({ leftPx: adjustedLeft, thumb });
                        }
                    }}
                    onMouseLeave={() => !isDragging && setPreview(null)}
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newTime = (clickX / rect.width) * videoRef.current.duration;
                        videoRef.current.currentTime = newTime;
                    }}
                >
                    <div
                        className="absolute top-0 left-0 h-full bg-gray-500 bg-opacity-50"
                        style={{ width: `${buffered}%` }}
                    ></div>

                    <div
                        className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-100 ease-linear"
                        style={{ width: `${isDragging ? dragPercent : progress}%` }}
                    ></div>

                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-100 ease-linear z-50"
                        style={{ left: `calc(${isDragging ? dragPercent : progress}% - 8px)` }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                        }}
                        onTouchStart={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                        }}

                    />
                </div>

                {preview && (
                    <div
                        className="absolute bottom-8 transform -translate-x-1/2"
                        style={{ left: `${preview.leftPx}px` }}
                    >
                        <div
                            className="w-[160px] h-[90px] bg-black bg-cover bg-no-repeat rounded shadow-lg"
                            style={{
                                backgroundImage: thumbsBg,
                                backgroundPosition: `-${preview.thumb.x}px -${preview.thumb.y}px`,
                                backgroundSize: `${preview.thumb.w * 10}px ${preview.thumb.h * 10}px`
                            }}
                        />
                    </div>
                )}

                <button id='replay-btn' className='w-25 h-25 z-30 absolute top-1/2 -translate-y-1/2 right-3/4'>
                    <img src="/video-replay.svg" alt="replay" />
                </button>

                <button
                    onClick={togglePlay}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 transition duration-200 z-30"
                >
                    {isPlaying ? (
                        <img src="/video-player-pause.svg" alt="Pause" className="w-25 h-25" />
                    ) : (
                        <img src="/video-player-play.svg" alt="Play" className="w-25 h-25" />
                    )}
                </button>

                <button id='forward-btn' className='w-25 h-25 z-30 absolute top-1/2 -translate-y-1/2 left-3/4'>
                    <img src="/video-forward.svg" alt="forward" />
                </button>

            </div>
        </div>
    );
};

export default VideoPlayer;