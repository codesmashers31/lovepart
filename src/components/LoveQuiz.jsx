import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import MagicButton from './MagicButton';

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
    }
];

const LoveQuiz = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);

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
            // For now, let's just accept any answer as "Love" logic, or shake.
            // But let's guide them to the cute answer.
            setIsCorrect(false);
            setTimeout(() => setIsCorrect(null), 500);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
            <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <GlassCard className="p-8 flex flex-col items-center text-center">
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
