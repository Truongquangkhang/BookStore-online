import { combineReducers } from "@reduxjs/toolkit";
import Book from './Book'
import Author from './Author'
import Category from "./Category";

const reducers = combineReducers({
    Book,
    Author,
    Category
})
export default reducers