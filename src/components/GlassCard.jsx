import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={`glass-panel p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
