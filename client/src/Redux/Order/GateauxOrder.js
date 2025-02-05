import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


// Async thunk for creating a Gateaux order
export const createGateauxOrder = createAsyncThunk(
  'order/createGateauxOrder',
  async (gateauxData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/api/GateauOrder/create-gateaux-order', gateauxData);
  
      return response.data; // Return the newly created order
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Something went wrong while creating the order!';
      toast.error(errorMsg, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

// Async thunk for fetching all Gateaux orders
export const fetchGtxOrder = createAsyncThunk(
  'order/fetchGtxOrder',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://51.178.139.198/:5000/api/GateauOrder/get-gateaux-orders');
      return response.data; // Return the list of orders
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Something went wrong while fetching the orders!';

      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  error: null,
  orders: [],
};

// Slice
const GtxSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle createGateauxOrder
    builder
      .addCase(createGateauxOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGateauxOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload); // Add the new order to the state
      })
      .addCase(createGateauxOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // Handle fetchGtxOrder
    builder
      .addCase(fetchGtxOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGtxOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload; // Replace the orders with the fetched data
      })
      .addCase(fetchGtxOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default GtxSlice.reducer;
