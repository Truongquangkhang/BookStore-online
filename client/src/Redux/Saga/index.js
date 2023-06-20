import { call, put, takeLatest } from 'redux-saga/effects'
import apiAuthor from '../../API/apiAuthor'
import apiAuthorization from '../../API/apiAuthorization'
import apiBook from '../../API/apiBook'
import apiCategory from '../../API/apiCategory'
import * as action from '../Actions'

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
        yield put(action.getCategories.getCategoriesFailure(error))
    }
}

function* HandlerLogin(actions){
    if(!localStorage.getItem("access_token")){
        try {
            const cat = yield call(apiAuthorization.login, actions.payload)
            
            if(cat.data.access_token){
                
                yield put(action.authAction.loginSuccess(cat.data))
                localStorage.setItem("access_token", cat.data.access_token)
                window.location.href = '/';
            }
            else{
                console.log(cat.data.err);
                yield put(action.authAction.loginFailure(cat.data.err))
            }
        } catch (error) {
            console.log(error);
            yield put(action.authAction.loginFailure(error))
        }
    }
    else{
        console.log("Logged");
    }
    
}
function HandlerLogout(){
    if(localStorage.getItem("access_token")){
        localStorage.removeItem("access_token")
    }
    else{
        console.log("chưa đăng nhập");
    }
    
}


function* mysaga() {
    yield takeLatest(action.getBooks.getBooksRequest, getBooks);
    yield takeLatest(action.getAuthors.getAuthorsRequest, getAuthors);
    yield takeLatest(action.getCategories.getCategoriesRequest, getCategories);
    yield takeLatest(action.authAction.loginRequest, HandlerLogin);
    yield takeLatest(action.authAction.logout, HandlerLogout)
}


export default mysaga