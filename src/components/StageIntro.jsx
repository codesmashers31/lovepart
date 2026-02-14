import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const StageIntro = ({ onNext, config }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-lg w-full px-4">
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Heart className="w-20 h-20 md:w-28 md:h-28 text-love-rose fill-love-rose drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]" />
            </motion.div>

            <div className="space-y-4">
                <motion.h1
                    className="text-4xl md:text-7xl font-serif font-bold text-white tracking-wide leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    {config?.title || "Hello My Love"}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-love-pink font-light italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    {config?.subtitle || "A small world I built just for you"}
                </motion.p>
            </div>

            <motion.button
                onClick={onNext}
                className="px-8 py-4 bg-love-glass backdrop-blur-md border border-love-mist rounded-full text-lg md:text-xl hover:bg-love-rose hover:border-love-rose transition-all duration-500 shadow-[0_0_20px_rgba(233,30,99,0.3)] group"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(233, 30, 99, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {config?.buttonText || "Enter Our World"} <Heart className="w-5 h-5 fill-white animate-pulse" />
                </span>
            </motion.button>
        </div>
    );
};

export default StageIntro;
