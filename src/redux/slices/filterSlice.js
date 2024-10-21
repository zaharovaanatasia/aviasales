import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkedFilter: {
    all: true,
    0: true,
    1: true,
    2: true,
    3: true,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const filter = action.payload;

      if (filter === 'all') {
        const newState = !state.checkedFilter.all;
        Object.keys(state.checkedFilter).forEach((key) => {
          state.checkedFilter[key] = newState;
        });
      } else {
        state.checkedFilter[filter] = !state.checkedFilter[filter];
      }

      if (!state.checkedFilter[filter] && state.checkedFilter.all) {
        state.checkedFilter.all = false;
      }
      if (
        state.checkedFilter['0'] &&
        state.checkedFilter['1'] &&
        state.checkedFilter['2'] &&
        state.checkedFilter['3']
      ) {
        state.checkedFilter.all = true;
      }
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export const selectCheckedFilter = (state) => state.filter.checkedFilter;
export default filterSlice.reducer;
