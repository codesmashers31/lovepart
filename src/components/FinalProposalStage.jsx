import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import RunningButton from './RunningButton';
import confetti from 'canvas-confetti';

const FinalProposalStage = ({ onRestart, userNames }) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        // Huge Heart Rain
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent -z-10" />

            {!accepted ? (
                <GlassCard className="max-w-3xl w-full text-center py-16 px-6 md:px-12 border-rose-300/30">
                    <motion.h1
                        className="text-4xl md:text-6xl font-display text-rose-100 mb-6 drop-shadow-lg leading-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        To My Mutinchanthum & Our Little World 🌍
                    </motion.h1>
                    <p className="text-rose-200/80 text-lg mb-10 font-handwriting">
                        10 Years of Love. 2 Years of Marriage. And a lifetime of happiness with our baby.
                        <br />
                        Will you keep making my life magical forever?
                    </p>

                    <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-8 h-32 relative">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <MagicButton onClick={handleAccept} className="text-xl md:text-2xl px-12 py-4">
                                Yes, Forever! 💖
                            </MagicButton>
                        </motion.div>

                        {/* The Escaping No Button */}
                        <div className="relative">
                            <RunningButton className="hidden md:block bg-gray-600 hover:bg-gray-700 text-xl px-10 py-4">
                                Maybe 😜
                            </RunningButton>
                        </div>
                    </div>
                </GlassCard>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display text-rose-200 drop-shadow-[0_0_25px_rgba(251,113,133,1)] mb-8">
                        Happy 2nd Anniversary! 💑
                    </h1>
                    <p className="text-white/80 text-xl mb-8">You + Me + Baby = 💖 Perfect Family</p>

                    <div className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-display text-white mt-8">
                        <span>{userNames.yourName}</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-rose-500"
                        >
                            ❤️
                        </motion.span>
                        <span>{userNames.partnerName}</span>
                    </div>

                    <button
                        onClick={onRestart}
                        className="mt-20 text-white/40 hover:text-white underline text-sm transition-colors"
                    >
                        Replay Our Love Story
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default FinalProposalStage;
