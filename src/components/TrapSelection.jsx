import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import RunningButton from './RunningButton';
import confetti from 'canvas-confetti';

const TrapSelection = ({ onComplete }) => {
    const handleYes = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(onComplete, 1500);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <GlassCard className="max-w-xl w-full text-center p-12">
                <motion.h2
                    className="text-3xl md:text-5xl font-display text-white mb-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Are you ready for the next 50 years? 👵👴
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center h-40">
                    <MagicButton onClick={handleYes} className="w-40 text-xl">
                        Yes 💖
                    </MagicButton>

                    <RunningButton className="w-40 text-xl bg-gray-600 hover:bg-gray-700">
                        No 💔
                    </RunningButton>
                </div>
            </GlassCard>
        </div>
    );
};

export default TrapSelection;
