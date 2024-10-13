import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkedFilter: {
    all: true,
    none: true,
    one: true,
    two: true,
    three: true,
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
        state.checkedFilter.none &&
        state.checkedFilter.one &&
        state.checkedFilter.two &&
        state.checkedFilter.three
      ) {
        state.checkedFilter.all = true;
      }
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export const selectCheckedFilter = (state) => state.filter.checkedFilter;
export default filterSlice.reducer;
