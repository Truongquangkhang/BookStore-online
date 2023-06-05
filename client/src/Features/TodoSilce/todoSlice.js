// 1. Setup todo slice
// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todos',
    initialState: 0,
    reducers: {
        addPost(state, action) {
            state +=1;
        },
        removePost(state, action) {
            state -=1;
        }
    }
});
const { actions, reducer } = todoSlice;
export const { addPost, removePost } = actions;
export default reducer;
