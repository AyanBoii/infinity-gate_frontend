import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './lib/store';
import { createGameSession } from './lib/slices/gameSlice';
import CharacterForm from './components/CharacterForm';
import GameContainer from './components/GameContainer';
import logo from './assets/infinity-gate-logo.png';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { sessionId, status, error } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleCharacterSubmit = async (formData: any) => {
    setIsLoading(true);
    await dispatch(createGameSession(formData));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1d2021] text-[#ebdbb2]">
      <header className="py-4 px-6 bg-[#282828] shadow-md flex justify-center items-center border-b border-[#504945]">
        <img 
          src={logo} 
          alt="Infinity Gate Logo" 
          className="h-16 object-contain hover:scale-105 transition-transform duration-300"
        />
      </header>

      <main className="py-8 px-4">
        {!sessionId ? (
          <div className="flex justify-center">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#83a598]"></div>
                <p className="ml-3 text-[#83a598]">Creating your adventure...</p>
              </div>
            ) : (
              <CharacterForm onSubmit={handleCharacterSubmit} />
            )}
          </div>
        ) : (
          <GameContainer sessionId={sessionId} />
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-[#cc241d] text-[#ebdbb2] rounded max-w-md mx-auto border border-[#9d0006]">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}
      </main>

      <footer className="py-4 px-6 bg-[#282828] text-center text-sm text-[#928374] border-t border-[#504945]">
        <p>&copy; {new Date().getFullYear()} Infinity Gate RPG - Powered by AI</p>
      </footer>
    </div>
  );
}

export default App;