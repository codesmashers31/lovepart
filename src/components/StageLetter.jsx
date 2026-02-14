import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StageLetter = ({ onNext }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-2xl w-full flex flex-col items-center">
            {!isOpen ? (
                <motion.div
                    className="cursor-pointer perspective-1000 relative"
                    onClick={() => setIsOpen(true)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    {/* Animated Envelope Representation */}
                    <div className="w-80 h-56 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center relative overflow-hidden ring-4 ring-white/10 ring-offset-4 ring-offset-transparent">
                        {/* Wax Seal */}
                        <div className="w-16 h-16 bg-red-800 rounded-full shadow-inner flex items-center justify-center border-2 border-red-600 z-20">
                            <span className="text-3xl">❤️</span>
                        </div>
                        {/* Envelope Flap Lines */}
                        <div className="absolute top-0 w-0 h-0 border-l-[160px] border-l-transparent border-t-[112px] border-t-rose-300 border-r-[160px] border-r-transparent opacity-50"></div>

                        <motion.div
                            className="absolute bottom-4 text-rose-900 font-hand font-bold text-xl"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Click to Open
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    className="bg-[#fffdf7] text-gray-800 p-8 md:p-12 rounded-xl shadow-[0_0_60px_rgba(255,255,255,0.3)] max-h-[80vh] overflow-y-auto relative glass-frame"
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    {/* Paper Texture/Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_2rem]"></div>

                    <div className="font-hand text-2xl md:text-3xl leading-relaxed space-y-6 relative z-10">
                        <p>Dearest Love,</p>
                        <p>
                            I remember the first time I saw you. It felt like time slowed down just for a moment.
                            Since then, my world has been brighter, warmer, and full of a kind of magic I never believed in before.
                        </p>
                        <p>
                            You are my favorite thought, my favorite smile, and my favorite adventure.
                            I wanted to create this little universe to show you just how much you mean to me.
                        </p>
                        <p>
                            Every pixel here is filled with the love I hold for you.
                        </p>
                        <p className="text-right mt-8 font-bold text-rose-600">— Forever Yours</p>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <motion.button
                            onClick={onNext}
                            className="px-6 py-2 bg-rose-500 text-white rounded-full font-sans text-sm tracking-wide shadow-lg hover:bg-rose-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Continue Our Journey →
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default StageLetter;
