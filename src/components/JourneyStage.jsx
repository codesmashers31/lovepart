import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import CircularGallery from './CircularGallery';
import ImageTrail from './ImageTrail';
import { X } from 'lucide-react';
import Loader from './Loader'; // Import Loader
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

// Mixing some "titles" for the gallery items to make it interesting
const galleryItems = [
    { image: img1, text: 'The Start' },
    { image: img2, text: 'Friendship' },
    { image: img3, text: 'First Date' },
    { image: img4, text: 'Engagement Day' },
    { image: img5, text: 'Together' },
    { image: img6, text: 'Favorite Travel' },
    { image: img7, text: 'My First date' },
    { image: img8, text: 'Memories' },
    { image: img9, text: 'Unbreakable' },
    { image: img10, text: '10 Years' },
    { image: img11, text: 'Our Gift for Each Other' },
    { image: img12, text: 'Baby Bump' },
    { image: img13, text: 'Forever' },
    { image: img14, text: 'Proposal' },
    { image: img15, text: 'Yes!' },
    { image: img16, text: 'My World' },
    { image: img17, text: 'Just Married' },
    { image: img18, text: 'Honeymoon' },
    { image: img19, text: 'Home' },
    { image: img20, text: 'Our Little World' },
    { image: img21, text: 'Bliss' },
    { image: img22, text: '2 Years' },
    { image: img23, text: 'Miracle' },
    { image: img24, text: 'Best Couple' },
    { image: img25, text: 'New Life' },
    { image: img26, text: 'Family' },
    { image: img27, text: 'My honeymoon' },
    { image: img28, text: 'Eternity' },
    // Adding more images to extend the gallery
    { image: img1, text: 'Loop Start' },
    { image: img2, text: 'More Love' },
    { image: img3, text: 'Always' },
    { image: img4, text: 'Engagement' },
    { image: img5, text: 'Together' },
    { image: img6, text: 'Our First Travel' },
    { image: img7, text: 'Dreaming' },
    { image: img8, text: 'Living' },
    { image: img9, text: 'Laughing' },
    { image: img10, text: 'Best valentine' },
];

const JourneyStage = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Preload all images - UNIQUE URLs only
        const imageUrls = [...new Set(galleryItems.map(item => item.image))];
        imageUrls.push(img12);

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        const handleImageLoad = () => {
            loadedCount++;
            const newProgress = (loadedCount / totalImages) * 100;
            setProgress(newProgress);

            if (loadedCount === totalImages) {
                setTimeout(() => setLoading(false), 200);
            }
        };

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });

        const timeout = setTimeout(() => setLoading(false), 8000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 bg-gray-900"
                    >
                        <Loader text="Gathering our memories..." progress={progress} />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="min-h-screen py-10 px-4 z-10 relative flex flex-col items-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Faded Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none blur-[2px]"
                    style={{ backgroundImage: `url(${img12})` }}
                />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl text-center relative z-20 mb-8 px-6"
                >
                    <h2 className="text-3xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-pink-200 mb-6 drop-shadow-md">
                        Every Step With You Is Magical ✨
                    </h2>
                    <div className="space-y-4 text-white/90 text-sm md:text-lg font-handwriting italic bg-black/10 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-2xl">
                        <p>"Where you go, I will go; and where you stay, I will stay."</p>
                        <p>"You are the greatest thing that has ever happened to me."</p>
                        <p>"Home is wherever I am with you."</p>
                    </div>
                </motion.div>

                <div className="absolute top-4 right-4 z-30">
                    {/* Optional: Add a toggle here if we wanted to switch between views */}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full h-[70vh] relative z-10 overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                >
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 relative z-20"
                >
                    <MagicButton onClick={onComplete}>Enter Our World ➡️</MagicButton>
                </motion.div>

                <div className="absolute bottom-4 text-white/30 text-xs z-20 pointer-events-none tracking-widest uppercase font-medium">
                    Drag to explore our memories
                </div>
            </motion.div>
        </>
    );
};

export default JourneyStage;
