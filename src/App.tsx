import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './lib/store';
import { createGameSession } from './lib/slices/gameSlice';
import CharacterForm from './components/CharacterForm';
import GameContainer from './components/GameContainer';
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
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-4 px-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Infinity Gate RPG</h1>
      </header>

      <main className="py-8 px-4">
        {!sessionId ? (
          <div className="flex justify-center">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <p className="ml-3">Creating your adventure...</p>
              </div>
            ) : (
              <CharacterForm onSubmit={handleCharacterSubmit} />
            )}
          </div>
        ) : (
          <GameContainer sessionId={sessionId} />
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-500 text-white rounded max-w-md mx-auto">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}
      </main>

      <footer className="py-4 px-6 bg-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Infinity Gate RPG - Powered by AI</p>
      </footer>
    </div>
  );
}

export default App;