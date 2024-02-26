import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from '../components/favoritesSlice';
import { logsReducer } from '../components/logsSlice';

const store = configureStore({
  reducer: {
    favoriteExercises: favoritesReducer,
    logs: logsReducer,
  },
});

export default store;