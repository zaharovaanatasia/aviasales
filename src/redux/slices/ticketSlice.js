import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://front-test.dev.aviasales.ru/search');
      if (!response.ok) {
        return rejectWithValue('Ошибка загрузки данных');
      }
      console.log(data);

      const data = await response.json();
      console.log(data);

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
        `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`,
      );

      if (!response.ok) {
        return rejectWithValue('Ошибка загрузки данных');
      }

      const data = await response.json();
      console.log(data);

      return data.tickets;
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
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.loading = false;
        state.searchId = action.payload;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
        state.stop = action.payload.stop;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectTickets = (state) => state.tickets.tickets;
export const selectLoading = (state) => state.tickets.loading;
export const selectError = (state) => state.tickets.error;
export const selectSearchId = (state) => state.tickets.searchId;
export default ticketSlice.reducer;
