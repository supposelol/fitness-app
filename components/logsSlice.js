import { createSlice } from '@reduxjs/toolkit';

const logsSlice = createSlice({
  name: 'logs',
  initialState: [],
  reducers: {
    addLog: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addLog } = logsSlice.actions;
export const logsReducer = logsSlice.reducer;