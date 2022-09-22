import { configureStore } from '@reduxjs/toolkit';
import data from './counterManager';

export const store = configureStore({
  reducer: {
    data
  },
});
