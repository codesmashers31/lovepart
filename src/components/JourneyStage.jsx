import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import CircularGallery from './CircularGallery';
import ImageTrail from './ImageTrail';
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

// Mixing some "titles" for the gallery items to make it interesting
const galleryItems = [
    { image: img1, text: 'The Start' },
    { image: img2, text: 'Friendship' },
    { image: img3, text: 'First Date' },
    { image: img4, text: 'Smiles' },
    { image: img5, text: 'Together' },
    { image: img6, text: 'Adventures' },
    { image: img7, text: 'Love' },
    { image: img8, text: 'Memories' },
    { image: img9, text: 'Unbreakable' },
    { image: img10, text: '10 Years' },
    { image: img11, text: 'Soulmates' },
    { image: img12, text: 'My Heart' },
    { image: img13, text: 'Forever' },
    { image: img14, text: 'Proposal' },
    { image: img15, text: 'Yes!' },
    { image: img16, text: 'Wedding' },
    { image: img17, text: 'Just Married' },
    { image: img18, text: 'Honeymoon' },
    { image: img19, text: 'Home' },
    { image: img20, text: 'Us' },
    { image: img21, text: 'Bliss' },
    { image: img22, text: '2 Years' },
    { image: img23, text: 'Miracle' },
    { image: img24, text: 'Baby Bump' },
    { image: img25, text: 'New Life' },
    { image: img26, text: 'Family' },
    { image: img27, text: 'Joy' },
    { image: img28, text: 'Eternity' },
    // Adding more images to extend the gallery
    { image: img1, text: 'Loop Start' },
    { image: img2, text: 'More Love' },
    { image: img3, text: 'Always' },
    { image: img4, text: 'Forever' },
    { image: img5, text: 'Together' },
    { image: img6, text: 'Us' },
    { image: img7, text: 'Dreaming' },
    { image: img8, text: 'Living' },
    { image: img9, text: 'Laughing' },
    { image: img10, text: 'Loving' },
];

const JourneyStage = ({ onComplete }) => {
    return (
        <div className="min-h-screen py-10 px-4 z-10 relative flex flex-col items-center overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-display text-rose-100 mb-6 text-center drop-shadow-md relative z-20 pointer-events-none"
            >
                10 Years of Love & 2 Years of Marriage ❤️
            </motion.h2>

            <div className="absolute top-4 right-4 z-30">
                {/* Optional: Add a toggle here if we wanted to switch between views, but forcing ImageTrail for now */}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[70vh] relative z-10 overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm"
            >
                {/* Passing just the image URLs array to ImageTrail */}
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

            <div className="absolute bottom-4 text-white/30 text-xs z-20 pointer-events-none">
                Drag to explore our memories
            </div>
        </div>
    );
};

export default JourneyStage;
