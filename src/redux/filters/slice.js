import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brand: "",
  mileageFrom: "",
  mileageTo: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      const { brand, mileageFrom, mileageTo } = action.payload;
      if (brand) state.brand = brand;
      if (mileageFrom !== undefined) state.mileageFrom = mileageFrom;
      if (mileageTo !== undefined) state.mileageTo = mileageTo;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
