// favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteExercises: [],
  allExercises: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const exerciseId = action.payload;
      if (state.favoriteExercises.includes(exerciseId)) {
        state.favoriteExercises = state.favoriteExercises.filter(id => id !== exerciseId);
      } else {
        const exercise = state.allExercises.find(ex => ex.id === exerciseId);
        if (exercise) {
          state.favoriteExercises.push(exerciseId);
        }
      }
    },
    updateAllExercises: (state, action) => {
      const newExercises = action.payload;
      const newExerciseIds = newExercises.map(ex => ex.id);
      // Filter out existing exercises that are in the new set
      const filteredExercises = state.allExercises.filter(ex => !newExerciseIds.includes(ex.id));
      // Merge the existing and new exercises
      state.allExercises = [...filteredExercises, ...newExercises];
    },
  },
});

export const { toggleFavorite, updateAllExercises } = favoritesSlice.actions;
export default favoritesSlice.reducer;
