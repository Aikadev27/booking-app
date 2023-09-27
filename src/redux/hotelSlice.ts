"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/services/axios.service";
export const fetchListHotel = createAsyncThunk(
  "/hotels/fetchListHotel",
  async (_, thunkAPI) => {
    const res = await axios.get("/hotel/get-all-hotels");
    return res.data;
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    isFetching: false,
    listHotels: null,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchListHotel.pending, (state) => {
      (state.isError = false), (state.isFetching = true);
    });
    builder.addCase(fetchListHotel.fulfilled, (state, action) => {
      (state.isError = false), (state.isFetching = false);
      state.listHotels = action.payload;
    });
    builder.addCase(fetchListHotel.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export const {} = hotelSlice.actions;
export default hotelSlice.reducer;
