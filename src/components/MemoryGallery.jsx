import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import ImageCard from './ImageCard';
import MagicButton from './MagicButton';
import { X } from 'lucide-react';

const photos = [
    { id: 1, src: "https://picsum.photos/id/1011/400/600", caption: "Our First Kayak Trip" },
    { id: 2, src: "https://picsum.photos/id/1015/400/400", caption: "Mountain Sunset" },
    { id: 3, src: "https://picsum.photos/id/1025/400/500", caption: "Cozy Winter" },
    { id: 4, src: "https://picsum.photos/id/1027/400/400", caption: "Walking in the Park" },
    { id: 5, src: "https://picsum.photos/id/1035/400/600", caption: "Waterfall Hike" },
    { id: 6, src: "https://picsum.photos/id/1040/400/400", caption: "Castle Visit" },
];

const MemoryGallery = ({ onComplete }) => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="flex flex-col items-center min-h-screen px-4 py-8 z-10 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display text-rose-100 mb-8 text-center drop-shadow-md"
            >
                Our Beautiful Moments 📸
            </motion.h2>

            <GlassCard className="w-full max-w-5xl p-6">
                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {photos.map((photo, index) => (
                        <ImageCard
                            key={photo.id}
                            src={photo.src}
                            caption={photo.caption}
                            alt={photo.caption}
                            delay={index * 0.1}
                            onClick={() => setSelectedId(photo.id)}
                            className="w-full break-inside-avoid mb-4"
                        />
                    ))}
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
