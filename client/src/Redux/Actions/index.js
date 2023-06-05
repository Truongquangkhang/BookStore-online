import { createActions } from 'redux-actions';


export const getType = (action)=>{
    return action.type
}


export const getBooks =  createActions({
    getBooksRequest: undefined,
    getBooksSuccess: (payload)=>payload,
    getBooksFailure: (err)=>err
})

export const getAuthors = createActions({
    getAuthorsRequest: undefined,
    getAuthorsSuccess: (payload)=>payload,
    getAuthorsFailure: (err)=>err
})

export const getCategories = createActions({
    getCategoriesRequest: undefined,
    getCategoriesSuccess: (payload)=>payload,
    getCategoriesFailure: (err)=>err
})