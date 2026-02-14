import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from './MagicButton';
import GlassCard from './GlassCard';

import img1 from '../assets/images/1.jpeg';

const HeroStage = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10 overflow-hidden">
            {/* Faded Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none blur-[2px]"
                style={{ backgroundImage: `url(${img1})` }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8 relative z-10"
            >
                <span className="text-6xl md:text-8xl animate-float inline-block">💖</span>
            </motion.div>

            <GlassCard className="max-w-2xl w-full flex flex-col items-center gap-6 py-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-violet-200 drop-shadow-md"
                >
                    Welcome to Our<br />Love World
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl text-white/80 max-w-lg font-light italic"
                >
                    "A journey through our sweetest memories, waiting just for you..."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    className="mt-4"
                >
                    <MagicButton onClick={onStart}>
                        Start the Journey
                    </MagicButton>
                </motion.div>
            </GlassCard>
        </div>
    );
};

export default HeroStage;
