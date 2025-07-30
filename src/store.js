import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { feedSlice } from "./features/feedSlice/feedSlice";

const RootReducer = combineReducers({
    feed: feedSlice.reducer,
});

export const store = configureStore({
    reducer: RootReducer
});