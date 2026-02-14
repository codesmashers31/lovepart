import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Envelope from './Envelope';

import TextType from './TextType';

const LetterStage = ({ onComplete }) => {
    const fullText = "Happy 2nd Anniversary, My Love! ❤️\n\nThese past two years have been the most beautiful chapter of my life. Waking up next to you, sharing our dreams, and building our little world together has been a blessing.\n\nThank you for being my rock, my best friend, and my home. Here's to a lifetime of us.\n\nYours Forever,\nPartner ❤️";
    const [isOpen, setIsOpen] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 z-10 relative overflow-y-auto py-20">
            {/* Starry Background for this stage */}
            <div className="absolute inset-0 bg-black/40 z-0 fixed" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="z-10 w-full max-w-lg my-auto flex flex-col items-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl md:text-3xl font-display text-rose-100 mb-8 text-center drop-shadow-md"
                >
                    10 Years of Love & 2 Years of Marriage ❤️
                </motion.h2>

                <Envelope onOpen={() => setIsOpen(true)}>
                    <div className="text-sm md:text-base leading-relaxed text-slate-700 font-handwriting min-h-[200px]">
                        {isOpen && (
                            <TextType
                                text={fullText}
                                typingSpeed={50}
                                cursorCharacter="|"
                                loop={false}
                                onSentenceComplete={() => {
                                    setTimeout(() => setIsFinished(true), 1000);
                                    setTimeout(onComplete, 6000);
                                }}
                            />
                        )}
                    </div>
                </Envelope>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ delay: 1 }}
                    className="text-center text-white/60 text-xs mt-8 pb-10"
                >
                    {isFinished ? "Proceeding to connection..." : (isOpen ? "Reading..." : "Click the envelope to open")}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LetterStage;
