import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { storyConfig } from '../assets/story';

const StageJourney = ({ onNext }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: containerRef });

    // Create a smooth progress value
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Determine when to end the journey (e.g., at 95% scroll)
    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (v) => {
            if (v > 0.99) {
                onNext();
            }
        });
        return () => unsubscribe();
    }, [smoothProgress, onNext]);

    return (
        <div ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative no-scrollbar">

            {/* Sticky Car Animation */}
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -2, 0],
                        rotate: [0, 1, -1, 0]
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-16 md:w-48 md:h-24 bg-contain bg-no-repeat bg-center drop-shadow-2xl filter brightness-125"
                    style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/3061/3061341.png')" }} // Cute car icon or custom asset
                >
                    {/* Headlights effect */}
                    <div className="absolute right-0 top-1/2 w-24 h-12 bg-yellow-200 blur-xl opacity-40 rounded-full transform rotate-12"></div>
                </motion.div>
                <p className="text-center text-xs text-white/50 mt-2 font-mono animate-pulse">Scroll Down To Drive</p>
            </div>

            {/* Road / Path Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-love-deep to-transparent"></div>
                {/* Moving stars/road lines could be added here linked to scroll */}
            </div>

            {/* Scrollable Content Sections */}
            {storyConfig.journey.map((item, index) => (
                <section key={item.id} className="h-screen w-full flex items-center justify-center snap-center relative p-6">
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full bg-black/30 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg relative aspect-[4/3]">
                            <img
                                src={item.img}
                                alt={item.caption}
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 px-3 py-1 rounded-full text-xs font-mono text-love-gold border border-white/20">
                                {item.date}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-3xl font-hand text-love-rose font-bold">Memory #{index + 1}</h3>
                            <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-100">
                                "{item.caption}"
                            </p>
                        </div>
                    </motion.div>
                </section>
            ))}

            {/* Buffer section for smooth exit */}
            <section className="h-[50vh] flex items-center justify-center snap-center" />

        </div>
    );
};

export default StageJourney;
