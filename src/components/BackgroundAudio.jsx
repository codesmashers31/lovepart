import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const STAGE_SONGS = {
    0: 'LoPf32nKYb8', // Hero (Requested)
    1: 'LoPf32nKYb8', // Login (Keep playing Hero song)
    2: 'dImiR3Sr8Wo', // Quiz (Kadhale Kadhale - Konjam)
    3: 'dImiR3Sr8Wo', // Journey (Kadhale Kadhale - Konjam) - Continued vibe
    4: 'U3vO8o58wKQ', // Trap (Maruvarthai)
    5: 'QxddU3sjVRY', // Letter (Nenjukkul Peidhidum)
    6: 'keLNtr58yro', // Timeline (Unakaga Varuven - Requested for Timeline/Roadmap)
    7: 'poUq5mXCKmA', // Memory (River Flows in You)
    8: 'LoPf32nKYb8', // Final (Requested - Reprise)
};

const BackgroundAudio = ({ isPlaying, stage }) => {
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef(null);
    const currentVideoId = useRef(STAGE_SONGS[0]);

    useEffect(() => {
        // Load YouTube IFrame Player API code asynchronously.
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: currentVideoId.current,
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'loop': 1,
                    'playlist': currentVideoId.current,
                },
                events: {
                    'onReady': onPlayerReady,
                }
            });
        };

        return () => {
            // Cleanup if needed
        };
    }, []);

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
