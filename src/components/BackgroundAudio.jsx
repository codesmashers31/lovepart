import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const STAGE_SONGS = {
    0: 'kcTV3G-Wi34', // Hero (Updated)
    1: 'kcTV3G-Wi34', // Login (Updated)
    2: 'kcTV3G-Wi34', // Quiz (Kadhale Kadhale - Konjam)
    3: 'dvWdFMCC1-I', // Journey (Kadhale Kadhale - Konjam) - Continued vibe
    4: 'U3vO8o58wKQ', // Trap (Maruvarthai)
    5: 'bB-HQgHE5Gc', // Letter (Updated)
    6: '4HZN0XHfw88', // Timeline (Updated)
    7: 'B6pObfGC6RY', // Memory (Updated)
    8: 'XHi7UpUctWA', // Final (Requested: https://youtu.be/XHi7UpUctWA)
};

const BackgroundAudio = ({ isPlaying, stage }) => {
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef(null);
    const currentVideoId = useRef(STAGE_SONGS[0]);

    useEffect(() => {
        // Function to initialize the player
        const initPlayer = () => {
            if (playerRef.current) return; // Prevent double initialization

            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: currentVideoId.current,
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'loop': 1,
                    'playlist': currentVideoId.current,
                    'origin': window.location.origin
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': (event) => {
                        // Handle unstarted state for autoplay
                        if (event.data === -1 && isPlaying) {
                            event.target.playVideo();
                        }
                    }
                }
            });
        };

        if (!window.YT) {
            // Load YouTube IFrame Player API code asynchronously.
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = initPlayer;
        } else if (window.YT && window.YT.Player) {
            // If already loaded, initialize immediately
            initPlayer();
        }

        // Global interaction listener to bypass autoplay restrictions
        const handleInteraction = () => {
            if (playerRef.current && playerRef.current.playVideo && isPlaying) {
                playerRef.current.playVideo();
                // We could potentially set a flag here or just let it run
            }
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, [isPlaying]);

    // Watch for stage changes to switch song
    useEffect(() => {
        const newSongId = STAGE_SONGS[stage] || STAGE_SONGS[0];

        // Only change if the song ID is different
        if (playerRef.current && playerRef.current.loadVideoById && newSongId !== currentVideoId.current) {
            currentVideoId.current = newSongId;
            playerRef.current.loadVideoById({
                videoId: newSongId,
                startSeconds: 0
            });
        }
    }, [stage]);

    useEffect(() => {
        if (playerRef.current && playerRef.current.playVideo) {
            if (isPlaying) {
                playerRef.current.playVideo();
            } else {
                playerRef.current.pauseVideo();
            }
        }
    }, [isPlaying]);

    const onPlayerReady = (event) => {
        event.target.setVolume(30);
        if (isPlaying) {
            event.target.playVideo();
        }
    };

    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
            } else {
                playerRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div id="youtube-player" className="hidden"></div>
            <button
                onClick={toggleMute}
                className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all border border-white/20 shadow-lg animate-pulse-slow"
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>
    );
};

export default BackgroundAudio;
