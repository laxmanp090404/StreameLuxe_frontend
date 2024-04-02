// store.jsx

import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./Slices/VideoSlice";

const store = configureStore({
  reducer: {
    videoState: videoReducer,
    // Add more reducers here if you have
  },
});

export default store;
