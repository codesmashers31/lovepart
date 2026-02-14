import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const StageProposal = ({ config }) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-center relative z-20 w-full px-4">
            <AnimatePresence mode="wait">
                {!accepted ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
                        className="space-y-12"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-love-rose via-purple-400 to-love-gold drop-shadow-[0_0_25px_rgba(233,30,99,0.8)] leading-tight">
                                {config?.title || "Will You Always Be Mine?"}
                            </h1>
                        </motion.div>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            {/* Optional secondary button, can be hidden if user wants focus on one */}

                            <motion.button
                                onClick={handleAccept}
                                className="px-10 py-5 bg-gradient-to-r from-love-rose to-purple-600 rounded-full text-xl md:text-2xl font-bold shadow-[0_0_30px_rgba(233,30,99,0.6)] animate-pulse-slow w-full md:w-auto"
                                whileHover={{ scale: 1.15, boxShadow: "0 0 50px rgba(233, 30, 99, 1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {config?.acceptBtn || "Forever Yes 💍"}
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        className="space-y-8"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 1.5 }}
                    >
                        <motion.div
                            className="relative"
                        >
                            <Heart className="w-32 h-32 md:w-48 md:h-48 text-love-rose fill-love-rose mx-auto animate-pulse" />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Heart className="w-32 h-32 md:w-48 md:h-48 text-love-rose fill-love-rose" />
                            </motion.div>
                        </motion.div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg leading-tight">
                            {config?.celebrationMsg || "You Are My Everything."}
                        </h1>

                        {/* Simple CSS Confetti */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 h-screen w-screen fixed top-0 left-0">
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-2xl"
                                    initial={{
                                        x: Math.random() * window.innerWidth,
                                        y: window.innerHeight,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: -100,
                                        rotation: Math.random() * 360,
                                        x: (Math.random() - 0.5) * 500 + window.innerWidth / 2
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 4,
                                        ease: "easeOut",
                                        repeat: Infinity,
                                        delay: Math.random() * 5
                                    }}
                                >
                                    {['❤️', '🌹', '✨', '💍'][Math.floor(Math.random() * 4)]}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StageProposal;
