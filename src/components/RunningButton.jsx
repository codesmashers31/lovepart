import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RunningButton = ({ children, className = "" }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveButton = () => {
        // Calculate random position within valid range (avoiding going off-screen too much)
        // We'll move it by a random amount from current, or just to a random spot in a container.
        // For a "trap", moving it safely within the viewport is improved by fixed positioning or relative text.
        // Let's try simple random offset first.

        // Better logic: viewport aware? For a simple fun trap, random large translation works.
        const randomX = Math.random() * 300 - 150; // -150 to 150
        const randomY = Math.random() * 300 - 150; // -150 to 150

        setPosition({
            x: position.x + (Math.random() > 0.5 ? 150 : -150) + Math.random() * 50,
            y: position.y + (Math.random() > 0.5 ? 150 : -150) + Math.random() * 50,
        });
    };

    return (
        <motion.button
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveButton}
            onClick={moveButton} // Just in case mobile user taps it fast
            className={`
        bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg
        cursor-not-allowed opacity-80 hover:opacity-100
        ${className}
      `}
        >
            {children}
        </motion.button>
    );
};

export default RunningButton;
