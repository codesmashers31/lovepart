import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import confetti from 'canvas-confetti';

const ProposalScene = ({ onRestart }) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        // Heart rain confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-900 via-pink-900 to-purple-900 opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />

            {!accepted ? (
                <GlassCard className="max-w-3xl w-full text-center py-12 px-6 md:px-12">
                    <motion.h1
                        className="text-4xl md:text-6xl font-display text-rose-100 mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        You Completed Our<br />Love Journey 🌹
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-10 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        "Every puzzle you solved, every memory we unlocked, leads to this moment.
                        You are my favorite adventure, my happy place, and my home.
                        Will you continue this journey with me, today and always?"
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <MagicButton onClick={handleAccept}>
                            Stay With Me Forever 💖
                        </MagicButton>
                        <MagicButton onClick={handleAccept}>
                            Always & Forever 💍
                        </MagicButton>
                    </motion.div>
                </GlassCard>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display text-rose-200 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)] mb-6">
                        You Are My Forever ❤️
                    </h1>
                    <p className="text-xl text-white/80">
                        Thank you for being my world.
                    </p>
                    <button
                        onClick={onRestart}
                        className="mt-12 text-white/50 hover:text-white underline text-sm transition-colors"
                    >
                        Replay Our Story
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default ProposalScene;
