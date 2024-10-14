import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: null,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    // setSortBy - функция, которая обновляет состояние.
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions; // экшен, созданный для изменения поля sortBy в состоянии.
export const selectSortBy = (state) => state.sort.sortBy; // селектор для получения текущего значения sortBy из состояния Redux.
export default sortSlice.reducer; // редюсер по умолчанию, который будет добавлен в хранилище Redux.
