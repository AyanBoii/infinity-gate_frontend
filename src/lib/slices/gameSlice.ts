import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL constant
const API_BASE_URL = 'http://localhost:8000/api/game';

// Configure axios
axios.defaults.withCredentials = true;

// Define interfaces for our game state
export interface GameScene {
  scene_text: string;
  options: string[];
  image_url: string | null;
}

export interface GameState {
  sessionId: string | null;
  currentScene: GameScene | null;
  sceneHistory: GameScene[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: GameState = {
  sessionId: null,
  currentScene: null,
  sceneHistory: [],
  status: 'idle',
  error: null,
};

// Async thunks for API calls
export const createGameSession = createAsyncThunk(
  'game/createSession',
  async (characterData: any, { rejectWithValue }) => {
    try {
      console.log('Creating game session with data:', characterData);
      const response = await axios.post(`${API_BASE_URL}/new-session/`, characterData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Game session created:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Failed to create game session:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || error.message || 'Failed to create game session');
    }
  }
);

export const getGameScene = createAsyncThunk(
  'game/getScene',
  async (sessionId: string, { rejectWithValue }) => {
    try {
      console.log('Getting game scene for session:', sessionId);
      const response = await axios.get(`${API_BASE_URL}/scene/${sessionId}/`, {
        withCredentials: true
      });
      console.log('Game scene retrieved:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Failed to get game scene:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || error.message || 'Failed to get game scene');
    }
  }
);

export const processPlayerChoice = createAsyncThunk(
  'game/processChoice',
  async ({ sessionId, choiceIndex }: { sessionId: string; choiceIndex: number }, { rejectWithValue }) => {
    try {
      console.log(`Processing choice ${choiceIndex} for session ${sessionId}`);
      const response = await axios.post(`${API_BASE_URL}/choice/${sessionId}/`, {
        choice_index: choiceIndex,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Next scene retrieved:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Failed to process player choice:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || error.message || 'Failed to process player choice');
    }
  }
);

// Create the game slice
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: () => initialState,
  },
  extraReducers: (builder) => {
    // Handle createGameSession
    builder
      .addCase(createGameSession.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createGameSession.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sessionId = action.payload.session_id;
        state.currentScene = {
          scene_text: action.payload.scene_text,
          options: action.payload.options,
          image_url: action.payload.image_url,
        };
        state.sceneHistory = [state.currentScene];
      })
      .addCase(createGameSession.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

    // Handle getGameScene
      .addCase(getGameScene.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getGameScene.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentScene = action.payload;
      })
      .addCase(getGameScene.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

    // Handle processPlayerChoice
      .addCase(processPlayerChoice.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(processPlayerChoice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentScene = action.payload;
        if (state.currentScene) {
          state.sceneHistory.push(state.currentScene);
        }
      })
      .addCase(processPlayerChoice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetGame } = gameSlice.actions;
export default gameSlice.reducer; 