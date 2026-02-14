import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, HeartCrack, Heart } from 'lucide-react';
import { storyConfig } from '../assets/story';

const StageLogin = ({ onNext, config }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const validNames = storyConfig.petName.map(n => n.toLowerCase());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validNames.includes(input.toLowerCase().trim())) {
            onNext();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 md:p-10 rounded-3xl glass-effect border border-white/10 shadow-2xl mx-4">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className="bg-love-rose/20 p-5 rounded-full mb-6 relative">
                    <Lock className="w-12 h-12 text-rose-300" />
                    <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Heart className="w-5 h-5 fill-love-gold text-love-gold" />
                    </motion.div>
                </div>
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-center">{config?.title || "Login to My Heart"}</h2>
            <p className="text-white/60 mb-8 text-center text-sm">{config?.title === "Who are you to me?" ? "What do I usually call you? 💕" : "Enter your sweet name"}</p>

            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={config?.placeholder || "e.g. My Kutty"}
                        className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:border-love-rose focus:ring-1 focus:ring-love-rose text-center text-lg placeholder:text-white/20 transition-all font-serif tracking-wider"
                    />
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute -bottom-8 left-0 right-0 text-center text-red-400 text-xs flex items-center justify-center gap-1"
                        >
                            <HeartCrack className="w-3 h-3" /> {config?.hint || "Try another pet name..."}
                        </motion.div>
                    )}
                </div>

                <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-love-rose to-purple-600 rounded-xl font-bold text-lg shadow-[0_4px_15px_rgba(233,30,99,0.4)] hover:shadow-[0_6px_20px_rgba(233,30,99,0.6)] transition-all flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>{config?.buttonText || "Unlock Love"}</span>
                    <Lock className="w-4 h-4 group-hover:hidden" />
                    <Heart className="w-4 h-4 hidden group-hover:block fill-white" />
                </motion.button>
            </form>
        </div>
    );
};

export default StageLogin;
