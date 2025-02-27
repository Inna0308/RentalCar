import { configureStore } from "@reduxjs/toolkit";

import { carReducer } from "./car/slice";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: { cars: carReducer, filter: filterReducer },
});
