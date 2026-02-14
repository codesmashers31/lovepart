import React from 'react';
import { motion } from 'framer-motion';

const StageGallery = ({ onNext }) => {
    const memories = [
        { id: 1, title: 'First Sight', date: 'The Beginning', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop', desc: 'When my heart skipped a beat.' },
        { id: 2, title: 'Adventures', date: 'Every Weekend', img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop', desc: 'Exploring the world with you.' },
        { id: 3, title: 'Quiet Moments', date: 'Always', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop', desc: 'Just being near you is enough.' },
        { id: 4, title: 'Laughter', date: 'Forever', img: 'https://images.unsplash.com/photo-1511253259073-4081f734d44d?q=80&w=600&auto=format&fit=crop', desc: 'Your smile lights up my life.' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-10">
            <motion.h2
                className="text-4xl font-serif text-white mb-8 drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Our Beautiful Moments
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4 overflow-y-auto max-h-[70vh] scrollbar-hide pb-20">
                {memories.map((mem, index) => (
                    <motion.div
                        key={mem.id}
                        className="relative group rounded-2xl overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                        <img
                            src={mem.img}
                            alt={mem.title}
                            className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                            <h3 className="text-xl font-bold font-serif text-white">{mem.title}</h3>
                            <p className="text-sm text-love-rose font-medium">{mem.date}</p>
                            <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{mem.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={onNext}
                className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all font-sans tracking-widest text-sm uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                More Memories Await ↓
            </motion.button>
        </div>
    );
};

export default StageGallery;
