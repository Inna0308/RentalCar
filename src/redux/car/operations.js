import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const carInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

const removeCommas = (value) => value.replace(/,/g, "");

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
    if (filters.mileageFrom) params.minMileage = removeCommas(filters.mileageFrom);
    if (filters.mileageTo) params.maxMileage = removeCommas(filters.mileageTo);

    const { data } = await carInstance.get("/cars", { params });

    return data.cars;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCarById = createAsyncThunk("cars/fetchById", async (id, thunkApi) => {
  try {
    const { data } = await carInstance.get(`/cars/${id}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
