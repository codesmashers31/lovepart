import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';

const LoginForm = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date) {
            setError("Please fill in our details to enter ❤️");
            return;
        }
        // Simple validation "simulation" - accepts anything for now to be friendly
        onComplete();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <GlassCard className="max-w-md w-full p-6 md:p-8">
                <h2 className="text-2xl font-display text-rose-100 mb-2 text-center">Mutinchanthum 🔐</h2>
                <p className="text-white/70 text-center mb-6 text-xs">Enter your name and our special date</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="space-y-1">
                        <label className="text-rose-200 text-xs font-medium uppercase tracking-wider">Your Name (or Nickname)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all"
                            placeholder="e.g. My Love"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-rose-200 text-sm font-medium uppercase tracking-wider">Our Special Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all min-h-[50px]"
                        />
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-rose-300 text-sm text-center bg-rose-900/40 py-2 rounded-lg"
                        >
                            {error}
                        </motion.p>
                    )}

                    <div className="mt-4 flex justify-center">
                        <MagicButton onClick={null}>
                            Enter Our World
                        </MagicButton>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default LoginForm;
