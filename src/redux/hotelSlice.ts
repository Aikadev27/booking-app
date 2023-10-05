"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/services/axios.service";
import { stat } from "fs";
export const fetchListHotel = createAsyncThunk(
  "/hotels/fetchListHotel",
  async (_, thunkAPI) => {
    const res = await axios.get("/hotel/get-all-hotels");
    return res.data;
  }
);

export const fetchHotelsByCity = createAsyncThunk(
  "/hotels/fetchHotelsByCity",
  async (location: string, thunkAPI) => {
    const res = await axios.get(`hotel/get-by-city/${location}`);
    return res.data;
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    isFetching: false,
    listHotels: null,
    isError: false,
    HotelsByCity: {
      isFetching: false,
      listHotels: null,
      isError: false,
    },
  },
  reducers: {},
  extraReducers(builder) {
    // hotel
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
    // hotels by city
    builder.addCase(fetchHotelsByCity.pending, (state) => {
      state.HotelsByCity.isFetching = true;
      state.HotelsByCity.isError = false;
    });
    builder.addCase(fetchHotelsByCity.fulfilled, (state, action) => {
      state.HotelsByCity.isFetching = false;
      state.HotelsByCity.isError = false;
      state.HotelsByCity.listHotels = action.payload;
    });
    builder.addCase(fetchHotelsByCity.rejected, (state) => {
      state.HotelsByCity.isFetching = false;
      state.HotelsByCity.isError = true;
      state.HotelsByCity.listHotels = null;
    });
  },
});

export const {} = hotelSlice.actions;
export default hotelSlice.reducer;
