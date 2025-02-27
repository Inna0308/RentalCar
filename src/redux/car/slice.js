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
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      }),
});

export const carReducer = carSlice.reducer;
