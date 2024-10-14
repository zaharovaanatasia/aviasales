import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';
import ticketReducer from './slices/ticketSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    tickets: ticketReducer,
  },
});

export default store;
