import { combineReducers } from "@reduxjs/toolkit";
import Book from './Book'
import Author from './Author'
import Category from "./Category";
import Auth from "./Auth";

const reducers = combineReducers({
    Book,
    Author,
    Category,
    Auth
})
export default reducers