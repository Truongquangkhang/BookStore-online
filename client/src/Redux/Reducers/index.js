import { combineReducers } from "@reduxjs/toolkit";
import Book from './Book'
import Author from './Author'
import Category from "./Category";
import Auth from "./Auth";
import User from "./User";
import Content from "./Content";
const reducers = combineReducers({
    Book,
    Author,
    Category,
    User,
    Auth,
    Content
})
export default reducers