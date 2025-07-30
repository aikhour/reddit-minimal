import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        searchTerm: '',
        posts: []
    },
    reducers: {
        setSearchTerm(state, action) {
            state.feed.searchTerm = action.payload;
        }
    }
});

export const { setSearchTerm } = feedSlice.reducers;
export default feedSlice.reducer;