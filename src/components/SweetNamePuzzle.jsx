import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import ImageCard from './ImageCard';

const nicknames = [
    { id: 1, text: "Buddy", isCorrect: false, src: "https://picsum.photos/id/102/300/300" },
    { id: 2, text: "Colleague", isCorrect: false, src: "https://picsum.photos/id/103/300/300" },
    { id: 3, text: "My Love", isCorrect: true, src: "https://picsum.photos/id/342/300/300" }, // Correct one
    { id: 4, text: "Stranger", isCorrect: false, src: "https://picsum.photos/id/106/300/300" },
    { id: 5, text: "Bestie", isCorrect: false, src: "https://picsum.photos/id/107/300/300" },
    { id: 6, text: "Acquaintance", isCorrect: false, src: "https://picsum.photos/id/108/300/300" },
];

const SweetNamePuzzle = ({ onComplete }) => {
    const [shakingId, setShakingId] = useState(null);

    const handleCardClick = (id, isCorrect) => {
        if (isCorrect) {
            onComplete();
        } else {
            setShakingId(id);
            setTimeout(() => setShakingId(null), 500);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-display text-rose-200 mb-8 text-center drop-shadow-lg"
            >
                What do I call you? 🤫
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {nicknames.map((name, index) => (
                    <motion.div
                        key={name.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: shakingId === name.id ? [0, -10, 10, -10, 10, 0] : 0
                        }}
                        transition={{
                            delay: index * 0.1,
                            x: { duration: 0.4 }
                        }}
                        className="cursor-pointer"
                    >
                        <ImageCard
                            src={name.src}
                            caption={name.text}
                            onClick={() => handleCardClick(name.id, name.isCorrect)}
                            className="h-40 md:h-52"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SweetNamePuzzle;
