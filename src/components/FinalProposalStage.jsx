import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import RunningButton from './RunningButton';
import confetti from 'canvas-confetti';
import { playFireworks, playSuccess } from '../utils/SoundEffects';

import img24 from '../assets/images/24.jpeg';

const FinalProposalStage = ({ onRestart, userNames }) => {
    const [accepted, setAccepted] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setShowContent(true);
            handleAccept(); // Automatically trigger celebration
        }
    }, [countdown]);

    const handleAccept = () => {
        setAccepted(true);
        playSuccess();
        playFireworks();

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
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative overflow-hidden">
            {/* Countdown Overlay */}
            <AnimatePresence>
                {!showContent && (
                    <motion.div
                        key="countdown"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950"
                    >
                        <motion.div
                            key={countdown}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-9xl font-display text-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]"
                        >
                            {countdown}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-10 text-rose-200 text-2xl font-handwriting italic"
                        >
                            Are you ready for the final surprise?
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Faded Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none blur-[2px]"
                style={{ backgroundImage: `url(${img24})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent -z-10" />

            {accepted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center relative z-20"
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
