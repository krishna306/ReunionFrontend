import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";
const initialState = [];

export const postsSlice = createSlice({
  name: "property",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.getSearchResult.matchFulfilled,
      (state, { payload }) => {
       return payload;
      });
    },
})

export default postsSlice.reducer;
