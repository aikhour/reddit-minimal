import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        searchTerm: '',
        posts: []
    },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const selectTerm = (state) => state.feed.searchTerm;
export const { setSearchTerm } = feedSlice.actions;
export default feedSlice.reducer;