import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './Envelope';
import TextType from './TextType';
import { X, Heart, Sparkles } from 'lucide-react';

import img16 from '../assets/images/16.jpeg';

const LetterStage = ({ onComplete }) => {
    const fullText = "Eight years ago, we chose love.\nTwo years ago, we chose forever.\n\nWe began with nothing but dreams in our hands and hope in our hearts. No guarantees, no safety nets — just you and me against the world.\n\nWhen I was drowning in doubt, you were my shore.\nWhen I was breaking in silence, you were my strength.\nWhen I couldn’t see a future, you became my vision.\n\nToday, I stand stronger, higher, better — not because life was easy, but because you never let me fall alone.\n\nAnd now, when I look at our little boy, I see our love breathing, smiling, living.\nHe is our journey, our proof, our greatest blessing.\n\nHappy 2nd Anniversary, my love.\n\nYou are not just the woman I married…\nYou are the miracle that built my life.";
    const [isOpen, setIsOpen] = useState(false);

    // Split text for better rendering if needed, or just keep as block
    const paragraphs = fullText.split('\n\n');

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 z-10 relative overflow-hidden bg-black/20">
            {/* Faded Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none blur-[2px]"
                style={{ backgroundImage: `url(${img16})` }}
            />

            {/* Context Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 text-2xl md:text-3xl font-display text-rose-100 text-center drop-shadow-md z-0 pointer-events-none"
            >
                A Letter For You 💌
            </motion.h2>

            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="z-10"
                    >
                        <Envelope onOpen={() => setIsOpen(true)}>
                            <div className="text-center text-rose-900 font-bold font-handwriting py-10">
                                Click to Open<br />My Heart
                            </div>
                        </Envelope>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sweet Alert Style Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => { }}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-lg bg-[#fffdf7] rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(255,255,255,0.4)] max-h-[80vh] overflow-y-auto custom-scrollbar"
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-red-500 to-rose-400" />
                            <Sparkles className="absolute top-4 right-4 text-yellow-400 w-6 h-6 animate-pulse" />
                            <Heart className="absolute top-4 left-4 text-rose-500 w-6 h-6 animate-bounce" />

                            <div className="text-center mb-6">
                                <div className="inline-block p-3 rounded-full bg-rose-100 mb-3">
                                    <span className="text-4xl">💌</span>
                                </div>
                                <h3 className="text-2xl font-display text-rose-900 font-bold">My Dearest Love</h3>
                            </div>

                            <div className="space-y-4 font-handwriting text-lg md:text-xl text-slate-800 leading-relaxed text-center">
                                <TextType
                                    text={fullText}
                                    typingSpeed={30}
                                    initialDelay={500}
                                    showCursor={false}
                                />
                            </div>

                            <div className="mt-8 flex justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onComplete}
                                    className="px-8 py-3 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-full font-bold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all flex items-center gap-2"
                                >
                                    Continue Our Journey <span className="text-xl">→</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LetterStage;
