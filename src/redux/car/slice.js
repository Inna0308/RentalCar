import { createSlice } from "@reduxjs/toolkit";

import { fetchCarBrends, fetchCarById, fetchCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  currentCar: null,
  carBrands: [],
  isLoading: false,
  isError: null,
  page: 1,
};

const carSlice = createSlice({
  name: "car",
  initialState: INITIAL_STATE,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
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
        if (state.page === 1) {
          state.cars = action.payload;
        } else {
          state.cars = [...state.cars, ...action.payload];
        }
        state.page = state.page + 1;
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

export const { setPage } = carSlice.actions;
export const carReducer = carSlice.reducer;
