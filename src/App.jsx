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

function App() {
  const [stage, setStage] = useState(1); // Start at Login (Stage 1)
  const [userNames, setUserNames] = useState({ yourName: '', partnerName: '' });

  const nextStage = () => setStage((curr) => curr + 1);
  const restart = () => setStage(1);

  const handleLoginComplete = (names) => {
    setUserNames(names);
    nextStage();
  };

  const renderStage = () => {
    switch (stage) {
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
        return <FinalProposalStage onRestart={restart} userNames={userNames} />;
      default:
        // Fallback to login if state gets weird, or could be a loading screen
        return <LoginStage onComplete={handleLoginComplete} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-body text-white selection:bg-rose-500/30">
      <BackgroundParticles />

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
