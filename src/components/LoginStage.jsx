import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';

const LoginStage = ({ onComplete }) => {
    const [yourName, setYourName] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (yourName && partnerName) {
            setIsSubmitted(true);
            setTimeout(() => {
                onComplete({ yourName, partnerName });
            }, 3000); // Wait for animation
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            {!isSubmitted ? (
                <GlassCard className="max-w-md w-full p-8 md:p-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-display text-rose-100 mb-6 drop-shadow-md">
                        10 Years of Love & 2 Years of Marriage ❤️
                    </h1>
                    <p className="text-white/70 mb-8 text-lg font-light">
                        Celebrating our beautiful journey together.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                        <div className="space-y-1">
                            <label className="text-rose-200 text-xs font-bold uppercase tracking-widest pl-1">Your Name</label>
                            <input
                                type="text"
                                value={yourName}
                                onChange={(e) => setYourName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white/10 transition-all shadow-inner"
                                placeholder="Hubby"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-rose-200 text-xs font-bold uppercase tracking-widest pl-1">Partner's Name</label>
                            <input
                                type="text"
                                value={partnerName}
                                onChange={(e) => setPartnerName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white/10 transition-all shadow-inner"
                                placeholder="Wifey"
                            />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <MagicButton onClick={null}>
                                Unlock Our Journey
                            </MagicButton>
                        </div>
                    </form>
                </GlassCard>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-br from-rose-200 to-violet-200 mb-4 drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]">
                        {yourName} ❤️ {partnerName}
                    </h2>
                    <p className="text-2xl text-white/90 font-light italic">
                        2 Beautiful Years Down, Forever to Go...
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default LoginStage;
