import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ text = "Loading our memories...", progress = 0 }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-md">
            <div className="relative mb-10">
                {/* Heart Animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="text-7xl drop-shadow-[0_0_20px_rgba(251,113,133,0.5)]"
                >
                    ❤️
                </motion.div>

                <motion.div
                    className="absolute inset-0 rounded-full bg-rose-500/20 blur-2xl"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </div>

            <div className="w-64 md:w-80 space-y-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-rose-100 font-display text-2xl text-center tracking-wider italic font-bold"
                >
                    {text}
                </motion.p>

                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5 shadow-inner">
                    <motion.div
                        className="h-full bg-gradient-to-r from-rose-500 via-pink-400 to-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <p className="text-white/40 text-[10px] text-center uppercase tracking-[0.2em] font-medium">
                    {Math.round(progress)}% Complete
                </p>
            </div>
        </div>
    );
};

export default Loader;
