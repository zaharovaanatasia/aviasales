import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://front-test.dev.aviasales.ru/search');
      if (!response.ok) {
        throw new Error('Failed to fetch searchId');
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
        `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
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
    builder.addCase(fetchTickets.fulfilled, (state, action) => {});
  },
});

export const selectTicket = (state) => state.tickets.tickets;
export default ticketSlice.reducer;
``;
