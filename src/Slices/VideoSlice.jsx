// VideoSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    videoRequest(state) {
      state.loading = true;
      state.error = null;
    },
    videoSuccess(state, action) {
      state.loading = false;
      state.videos = action.payload.videos;
    },
    videoFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { videoRequest, videoSuccess, videoFail } = videoSlice.actions;
export default videoSlice.reducer;
