import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';

// Placeholder images - using gradients/colors for now if real images aren't available, 
// or placeholder URLs. I will use placeholder URLs from logical sources or colors.
const initialItems = [
    { id: "mem1", text: "First Date", src: "https://picsum.photos/id/237/100/100", order: 1 },
    { id: "mem2", text: "First Trip", src: "https://picsum.photos/id/238/100/100", order: 2 },
    { id: "mem3", text: "First Kiss", src: "https://picsum.photos/id/239/100/100", order: 3 },
    { id: "mem4", text: "Proposal", src: "https://picsum.photos/id/240/100/100", order: 4 },
];

const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const MemorySortGame = ({ onComplete }) => {
    const [items, setItems] = useState(shuffle(initialItems));
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        // Check if sorted correctly
        const currentOrder = items.map(i => i.order).join('');
        const correctOrder = "1234";
        if (currentOrder === correctOrder) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }, [items]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-5xl font-display text-white mb-8 text-center"
            >
                Order Our Memories 🕰️
            </motion.h2>

            <Reorder.Group axis="y" values={items} onReorder={setItems} className="flex flex-col gap-4 w-full max-w-md">
                {items.map((item) => (
                    <Reorder.Item key={item.id} value={item}>
                        <GlassCard className={`
              p-4 cursor-grab active:cursor-grabbing flex items-center gap-4
              bg-white/10 backdrop-blur-sm
              border-white/20 select-none hover:bg-white/20 transition-colors
            `}>
                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/30">
                                <img src={item.src} alt={item.text} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold text-white drop-shadow-md">{item.text}</span>
                        </GlassCard>
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <motion.div
                className="mt-8 h-16"
                animate={{ opacity: isCorrect ? 1 : 0, y: isCorrect ? 0 : 20 }}
            >
                <MagicButton onClick={onComplete} disabled={!isCorrect}>
                    Unlock Next Memory 🔓
                </MagicButton>
            </motion.div>
        </div>
    );
};

export default MemorySortGame;
