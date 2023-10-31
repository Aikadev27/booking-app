"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/services/axios.service";

export const fetchBookingHistoryOfUser = createAsyncThunk(
  "/booking/fetchBookingHistoryOfUser",
  async (_, thunkAPI) => {
    const res = await axios.get("/booking/get-booking-history");
    return res.data;
  }
);
const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingHistory: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookingHistoryOfUser.fulfilled, (state, action) => {
      state.bookingHistory = action.payload;
    });
    builder.addCase(fetchBookingHistoryOfUser.rejected, (state) => {
      state.bookingHistory = null;
    });
  },
});

export const {} = bookingSlice.actions;
export default bookingSlice.reducer;
