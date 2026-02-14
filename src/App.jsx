import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundParticles from './components/BackgroundParticles';
import LoginStage from './components/LoginStage';
import LoveQuiz from './components/LoveQuiz';
import JourneyStage from './components/JourneyStage';
import TrapSelection from './components/TrapSelection';
import LetterStage from './components/LetterStage';
import StageTimeline from './components/StageTimeline';
import FinalProposalStage from './components/FinalProposalStage';
import HeroStage from './components/HeroStage';
import MemoryGallery from './components/MemoryGallery';
import BackgroundAudio from './components/BackgroundAudio';
import { playPop, playMagic } from './utils/SoundEffects';

function App() {
  const [stage, setStage] = useState(0); // Start at Hero (Stage 0)
  const [userNames, setUserNames] = useState({ yourName: '', partnerName: '' });
  const [isPlaying, setIsPlaying] = useState(false);

  const nextStage = () => {
    playPop();
    setStage((curr) => curr + 1);
  };
  const restart = () => {
    playMagic();
    setStage(1);
  };

  const handleStart = () => {
    setIsPlaying(true);
    playPop();
    nextStage();
  };

  const handleLoginComplete = (names) => {
    setUserNames(names);
    nextStage();
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return <HeroStage onStart={handleStart} />;
      case 1:
        return <LoginStage onComplete={handleLoginComplete} />;
      case 2:
        return <LoveQuiz onComplete={nextStage} />;
      case 3:
        return <JourneyStage onComplete={nextStage} />;
      case 4:
        return <TrapSelection onComplete={nextStage} />;
      case 5:
        return <LetterStage onComplete={nextStage} />;
      case 6:
        return <StageTimeline onComplete={nextStage} />;
      case 7:
        return <MemoryGallery onComplete={nextStage} />;
      case 8:
        return <FinalProposalStage onRestart={restart} userNames={userNames} />;
      default:
        // Fallback
        return <HeroStage onStart={handleStart} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-body text-white selection:bg-rose-500/30">
      <BackgroundParticles />
      <BackgroundAudio isPlaying={isPlaying} stage={stage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
