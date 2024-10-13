import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
  },
});

export default store;
