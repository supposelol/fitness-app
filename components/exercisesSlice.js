// exercisesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllExercises } from '../api/exerciseApi';
import favoritesSlice from './favoritesSlice';

const initialState = {
    allExercises: [],
    status: 'idle',
    error: null,
};

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
    const response = await fetchAllExercises();
    return response;
});

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExercises.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchExercises.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allExercises = action.payload;
                // Update the allExercises array in the favoritesSlice
                favoritesSlice.actions.updateAllExercises(action.payload);
            })
            .addCase(fetchExercises.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default exercisesSlice.reducer;