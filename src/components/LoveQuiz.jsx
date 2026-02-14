import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';
import img15 from '../assets/images/15.jpeg'; // Importing a romantic background image

// Import background used in next stage for preloading
import img12 from '../assets/images/12.jpeg';
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.jpeg';
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.jpeg';
// ... other images could be added but preloading the core ones helps most

const questions = [
    {
        id: 1,
        text: "How many beautiful years have we spent together?",
        options: ["8 Years", "2 Years", "10 Years (8 Love + 2 Marriage) ✨"],
        correct: "10 Years (8 Love + 2 Marriage) ✨"
    },
    {
        id: 2,
        text: "What makes our 10-year journey special?",
        options: ["8 Years of Love", "2 Years of Marriage", "8 Years Love + 2 Years Marriage = 10 Years 💑"],
        correct: "8 Years Love + 2 Years Marriage = 10 Years 💑"
    },
    {
        id: 3,
        text: "Who is the boss of our house now?",
        options: ["You", "Me", "Our Little Miracle 👶"],
        correct: "Our Little Miracle 👶"
    },
    {
        id: 4,
        text: "Where is our favorite place to be?",
        options: ["In each other's arms 🤗", "The Beach 🏖️", "Watching Movies 🎬"],
        correct: "In each other's arms 🤗"
    },
    {
        id: 5,
        text: "What is my promise to you forever?",
        options: ["To buy you chocolates 🍫", "To never let go of your hand 🤝", "To do the dishes 🍽️"],
        correct: "To never let go of your hand 🤝"
    }
];

const LoveQuiz = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        // Early preload for next stage images - Deduplicated
        const nextStageImages = [...new Set([
            img12, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
        ])];
        nextStageImages.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }, []);

    const handleAnswer = (option) => {
        const correct = questions[currentQuestion].correct;
        if (option === correct) {
            setIsCorrect(true);
            setTimeout(() => {
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(curr => curr + 1);
                    setIsCorrect(null);
                } else {
                    onComplete();
                }
            }, 1000);
        } else {
            // Shake effect for wrong answer
            setIsCorrect(false);
            setTimeout(() => setIsCorrect(null), 500);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img15})` }}
                initial={{ scale: 1.1, filter: "blur(2px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for readability */}
            </motion.div>

            <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg z-10"
            >
                <GlassCard className="p-8 flex flex-col items-center text-center backdrop-blur-md bg-white/10 border-white/20">
                    <span className="text-xs uppercase tracking-widest text-rose-200 mb-4 font-bold">
                        Level {currentQuestion + 1} / {questions.length}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-display drop-shadow-md">
                        {questions[currentQuestion].text}
                    </h2>

                    <div className="grid gap-4 w-full">
                        {questions[currentQuestion].options.map((option, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(option)}
                                animate={isCorrect === false ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                                className={`w-full py-4 px-6 rounded-xl border transition-all text-lg font-medium shadow-sm 
                                    ${isCorrect === true && option === questions[currentQuestion].correct
                                        ? "bg-green-500/50 border-green-400 text-white"
                                        : "bg-white/10 border-white/20 text-white hover:bg-white/15"
                                    }`}
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default LoveQuiz;
