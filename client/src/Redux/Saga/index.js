import { takeLatest, call, put, take } from 'redux-saga/effects'
import apiBook from '../../API/apiBook'
import * as action from '../Actions'
import apiAuthor from '../../API/apiAuthor'
import apiCategory from '../../API/apiCategory'

function* getBooks() {
    try {
        const books = yield call(apiBook.getAll)
        yield put(action.getBooks.getBooksSuccess(books.data))
    } catch (error) {
        console.log(error);
        yield put(action.getBooks.getBooksFailure(error));
    }
}

function* getAuthors() {
    try {
        const authors = yield call(apiAuthor.getAll)
        yield put(action.getAuthors.getAuthorsSuccess(authors.data))
    } catch (err) {
        console.log(err);
        yield put(action.getAuthors.getAuthorsFailure(err))
    }
}

function* getCategories() {
    try {
        const cat = yield call(apiCategory.getAll)
        yield put(action.getCategories.getCategoriesSuccess(cat.data))
    } catch (error) {
        console.log(error);
        yield put(action.getCategories.getCategoriesFailure(error))
    }
}

function* mysaga() {
    yield takeLatest(action.getBooks.getBooksRequest, getBooks);
    yield takeLatest(action.getAuthors.getAuthorsRequest, getAuthors)
    yield takeLatest(action.getCategories.getCategoriesRequest, getCategories)
}


export default mysaga