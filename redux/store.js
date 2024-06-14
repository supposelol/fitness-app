import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../components/favoritesSlice';
import exercisesReducer from '../components/exercisesSlice';
import { logsReducer } from '../components/logsSlice';

const store = configureStore({
  reducer: {
    favoriteExercises: favoritesReducer,
    exercises: exercisesReducer,
    logs: logsReducer,
  },
});

export default store;