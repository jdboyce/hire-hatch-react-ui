import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import selectedJobReducer from "./reducers/selectedJobReducer";

const rootReducer = combineReducers({
  selectedJob: selectedJobReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
