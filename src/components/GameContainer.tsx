import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store';
import { getGameScene, processPlayerChoice } from '../lib/slices/gameSlice';
import InputDesign from './ui/InputDesign';
import { PreviewFrame } from './ui/PreviewFrame';
import { AnswersSection } from './ui/AnswersSection';
import { ControlsPanel } from './ui/ControlsPanel';

interface GameContainerProps {
  sessionId: string;
}

const GameContainer: React.FC<GameContainerProps> = ({ sessionId }) => {
  const dispatch = useDispatch();
  const { currentScene, status, error } = useSelector((state: RootState) => state.game);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch initial scene on mount
  useEffect(() => {
    if (sessionId) {
      dispatch(getGameScene(sessionId));
    }
  }, [dispatch, sessionId]);
  
  // Update loading state based on scene data
  useEffect(() => {
    if (currentScene && status === 'succeeded') {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentScene, status]);
  
  // Handle player choice
  const handleOptionClick = (index: number) => {
    if (sessionId) {
      setIsLoading(true);
      dispatch(processPlayerChoice({ sessionId, choiceIndex: index }));
    }
  };
  
  // Show error state if there's an error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen font-['Press_Start_2P']" style={{ backgroundColor: "#282828" }}>
        <div className="bg-red-500 text-white p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button 
            className="mt-4 px-4 py-2 bg-white text-red-500 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <main className="flex flex-col gap-4 p-3 w-full min-h-screen font-['Press_Start_2P']" style={{ backgroundColor: "#282828" }}>
      <div className="flex gap-6 max-md:flex-col w-full">
        <section className="flex flex-col gap-4">
          <PreviewFrame 
            isLoading={isLoading || status === 'loading'} 
            sceneText={currentScene?.scene_text}
          />
          <div className="relative h-[473px] w-[450px] max-md:w-full">
            <div className="absolute rounded-md border-4 border-[#ebdbb2] size-full transition-all duration-300 hover:border-[#83a598] hover:shadow-lg hover:shadow-[#83a598]/50" />
            <ControlsPanel onReload={() => dispatch(getGameScene(sessionId))} />
          </div>
        </section>
        <AnswersSection 
          options={currentScene?.options || []}
          onOptionClick={handleOptionClick}
          isLoading={isLoading || status === 'loading'}
        />
      </div>
    </main>
  );
};

export default GameContainer; 