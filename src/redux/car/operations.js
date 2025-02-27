import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const carInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCarBrends = createAsyncThunk("brends/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await carInstance.get("/brands");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCars = createAsyncThunk("cars/fetchAll", async (filters, thunkApi) => {
  try {
    const params = {};

    if (filters.brand) params.brand = filters.brand;
    if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
    if (filters.mileageTo) params.maxMileage = filters.mileageTo;

    const { data } = await carInstance.get("/cars", { params });

    return data.cars;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
