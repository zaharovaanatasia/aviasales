import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!response.ok) {
        throw new Error('Ошибка получения id');
      }

      const data = await response.json();
      return data.searchId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  tickets: [],
  searchId: null,
  loading: false,
  error: null,
  stop: false,
  visibleTickets: 5,
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    increaseVisibleTickets: (state) => {
      state.visibleTickets += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = true;

        const ticketWithId = action.payload.tickets.map((ticket) => ({ ...ticket, id: nanoid() }));
        state.tickets = state.tickets.concat(ticketWithId);

        if (action.payload.stop) {
          state.stop = true;
          state.loading = false;
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export const { increaseVisibleTickets } = ticketSlice.actions;

export const selectTickets = (state) => state.tickets.tickets;
export const selectLoading = (state) => state.tickets.loading;
export const selectError = (state) => state.tickets.error;
export const selectSearchId = (state) => state.tickets.searchId;
export const selectStop = (state) => state.tickets.stop;
export const selectVisibleTickets = (state) => state.tickets.visibleTickets;

export default ticketSlice.reducer;
