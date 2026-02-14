import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ src, alt, caption, onClick, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-lg drop-shadow-md">{caption}</p>
                </div>
            )}
        </motion.div>
    );
};

export default ImageCard;
