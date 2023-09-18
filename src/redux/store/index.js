import { combineReducers, configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "../reducers/preference";
import jobsReducer from "../reducers/jobs";

const rootReducer = combineReducers({
  preferences: preferencesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
