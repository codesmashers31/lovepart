import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white/20 rounded-full blur-sm"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
            {/* Floating Hearts Layer */}
            {particles.slice(0, 8).map((p) => (
                <motion.div
                    key={`heart-${p.id}`}
                    className="absolute text-rose-300/30"
                    style={{
                        left: `${p.x + 10}%`,
                        top: `${p.y + 20}%`,
                        fontSize: `${p.size * 2}px`
                    }}
                    animate={{
                        y: -200,
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: p.duration * 0.8,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeIn",
                    }}
                >
                    ❤
                </motion.div>
            ))}
        </div>
    );
};

export default BackgroundParticles;
