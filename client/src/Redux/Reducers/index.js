import { combineReducers } from "@reduxjs/toolkit";
import Book from './Book'
import Author from './Author'
import Category from "./Category";
import Auth from "./Auth";
import User from "./User";
const reducers = combineReducers({
    Book,
    Author,
    Category,
    User,
    Auth
})
export default reducers