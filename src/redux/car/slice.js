import { createSlice } from "@reduxjs/toolkit";

import { fetchCarBrends, fetchCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  carBrands: [],
  isLoading: false,
  isError: null,
};

const carSlice = createSlice({
  name: "car",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarBrends.fulfilled, (state, action) => {
        state.carBrands = action.payload;
      })

      .addCase(fetchCars.pending, (state) => {
        console.log("Fetching cars...");
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        console.log("Cars fetched:", action.payload);
        state.isLoading = false;
        state.isError = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const carReducer = carSlice.reducer;
