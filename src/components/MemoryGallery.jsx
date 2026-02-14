import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import ImageCard from './ImageCard';
import MagicButton from './MagicButton';
import { X } from 'lucide-react';

import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.jpeg';
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.jpeg';
import img12 from '../assets/images/12.jpeg';
import img13 from '../assets/images/13.jpeg';
import img14 from '../assets/images/14.jpeg';
import img15 from '../assets/images/15.jpeg';
import img16 from '../assets/images/16.jpeg';
import img17 from '../assets/images/17.jpeg';
import img18 from '../assets/images/18.jpeg';
import img19 from '../assets/images/19.jpeg';
import img20 from '../assets/images/20.jpeg';
import img21 from '../assets/images/21.jpeg';
import img22 from '../assets/images/22.jpeg';
import img23 from '../assets/images/23.jpeg';
import img24 from '../assets/images/24.jpeg';
import img25 from '../assets/images/25.jpeg';
import img26 from '../assets/images/26.jpeg';
import img27 from '../assets/images/27.jpeg';
import img28 from '../assets/images/28.jpeg';

import ImageTrail from './ImageTrail';

const photos = [
    { id: 1, src: img1, caption: "Where it all began ❤️" },
    { id: 2, src: img2, caption: "Exploring the world together 🌍" },
    { id: 3, src: img3, caption: "Your smile is my home 🏠" },
    { id: 4, src: img4, caption: "Walking into forever 👣" },
    { id: 5, src: img5, caption: "Chasing waterfalls and dreams 🌊" },
    { id: 6, src: img6, caption: "Moments of pure joy ✨" },
    { id: 7, src: img7, caption: "The light of my life ☀️" },
    { id: 8, src: img8, caption: "Hand in hand, heart to heart 🤝" },
    { id: 9, src: img9, caption: "Building our dream together 🏗️" },
    { id: 10, src: img10, caption: "Every sunset is better with you 🌅" },
    { id: 11, src: img11, caption: "Pure love, pure magic 🪄" },
    { id: 12, src: img12, caption: "My forever support system 🧱" },
    { id: 13, src: img13, caption: "Small moments, big memories 📸" },
    { id: 14, src: img14, caption: "Winter warmth in your arms ❄️" },
    { id: 15, src: img15, caption: "The promise of a lifetime 💍" },
    { id: 16, src: img16, caption: "Our 'I Do' moment 🕊️" },
    { id: 17, src: img17, caption: "Blissfully married 🥂" },
    { id: 18, src: img18, caption: "Paradise found with you 🏝️" },
    { id: 19, src: img19, caption: "Together is my favorite place to be ❤️" },
    { id: 20, src: img20, caption: "Creating a life we love 🏠" },
    { id: 21, src: img21, caption: "Every day is a new adventure 🚀" },
    { id: 22, src: img22, caption: "Soulmates for eternity ∞" },
    { id: 23, src: img23, caption: "My heart belongs to you ❤️" },
    { id: 24, src: img24, caption: "Better together, always 🤝" },
    { id: 25, src: img25, caption: "Love you to the moon and back 🌙" },
    { id: 26, src: img26, caption: "Our story is my favorite 📖" },
    { id: 27, src: img27, caption: "Forever and always, yours ❤️" },
    { id: 28, src: img28, caption: "Life is beautiful with you 🌸" },
];

const MemoryGallery = ({ onComplete }) => {
    const [selectedId, setSelectedId] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [loadProgress, setLoadProgress] = React.useState(0);

    React.useEffect(() => {
        let loadedCount = 0;
        const totalImages = photos.length;

        const preloadImage = (photo) => {
            const imgTarget = new Image();
            imgTarget.src = photo.src;
            imgTarget.onload = () => {
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / totalImages) * 100));
                if (loadedCount === totalImages) {
                    setTimeout(() => setIsLoaded(true), 1500); // Small buffer for smoothness
                }
            };
            imgTarget.onerror = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setIsLoaded(true);
                }
            };
        };

        photos.forEach(preloadImage);
    }, []);

    if (!isLoaded) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-rose-200">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-6xl mb-4"
                >
                    💖
                </motion.div>
                <h3 className="text-2xl font-display mb-2">Preparing Memories...</h3>
                <div className="w-64 h-2 bg-rose-900/30 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-rose-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadProgress}%` }}
                    />
                </div>
                <p className="mt-2 text-sm opacity-60 font-serif">{loadProgress}% complete</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen px-4 py-8 z-10 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display text-rose-100 mb-8 text-center drop-shadow-md"
            >
                Our Beautiful Moments 📸
            </motion.h2>

            <GlassCard className="w-full max-w-5xl p-6 overflow-hidden">
                <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
                    <ImageTrail
                        items={photos.map(p => p.src)}
                        variant="7"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p className="text-white/30 text-lg font-serif">Move your mouse to reveal memories ✨</p>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <MagicButton onClick={onComplete}>Continue Journey ➡️</MagicButton>
                </div>
            </GlassCard>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-4xl w-full max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute -top-12 right-0 text-white hover:text-rose-400"
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={photos.find(p => p.id === selectedId)?.src}
                                alt="Memory"
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                            />
                            <p className="text-center text-white text-xl mt-4 font-display">
                                {photos.find(p => p.id === selectedId)?.caption}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MemoryGallery;
