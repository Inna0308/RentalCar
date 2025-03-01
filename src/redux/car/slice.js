import { createSlice } from "@reduxjs/toolkit";

import { fetchCarBrends, fetchCarById, fetchCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  currentCar: null,
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
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.currentCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const carReducer = carSlice.reducer;
