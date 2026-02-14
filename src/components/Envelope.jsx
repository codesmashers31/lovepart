import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onOpen, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
            if (onOpen) onOpen();
        }
    };

    return (
        <div className="flex justify-center items-center py-20 perspective-1000 min-h-[500px] relative">
            <div
                className="relative w-72 h-48 bg-rose-200 shadow-2xl cursor-pointer"
                onClick={handleClick}
            >
                {/* Envelope Flap Animation */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 bg-rose-300 origin-top z-30"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                    animate={{ rotateX: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Envelope Body (Bottom Triangle) */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full bg-rose-100 z-20 pointer-events-none"
                    style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }}
                />
                {/* Envelope Body (Sides) */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-rose-50 z-10 pointer-events-none"
                    style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}
                />
                <div
                    className="absolute top-0 right-0 w-full h-full bg-rose-50 z-10 pointer-events-none"
                    style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
                />

                {/* The Letter inside - animates up */}
                <motion.div
                    className="absolute left-4 right-4 bg-white p-6 shadow-md text-slate-800 text-sm font-handwriting z-0 border border-gray-200 overflow-y-auto custom-scrollbar"
                    initial={{ bottom: "10%", height: "80%", opacity: 0 }}
                    animate={{
                        bottom: isOpen ? "10%" : "10%",
                        height: isOpen ? "auto" : "80%", // Auto height to fit content
                        minHeight: isOpen ? "300px" : "0px",
                        maxHeight: isOpen ? "60vh" : "80%", // Cap height for small screens
                        opacity: isOpen ? 1 : 0,
                        zIndex: isOpen ? 40 : 0,
                        y: isOpen ? -100 : 0 // Move up more to clear the envelope
                    }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {children}
                </motion.div>

                {/* Decorative Seal */}
                {!isOpen && (
                    <motion.div
                        className="absolute top-[40%] left-[45%] w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs z-40 shadow-md border-2 border-red-800"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        ❤
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Envelope;
