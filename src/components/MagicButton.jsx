import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const MagicButton = ({ children, onClick, icon = true, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 113, 133, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        relative overflow-hidden group
        bg-gradient-to-r from-rose-500 to-violet-600
        text-white font-bold py-3 px-8 rounded-full shadow-lg
        flex items-center justify-center gap-2
        border border-white/20
        ${className}
      `}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <Heart className="w-5 h-5 fill-current animate-heartbeat" />}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>
    );
};

export default MagicButton;
