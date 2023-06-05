import { getType, getBooks } from '../Actions'

import { INIT_STATE } from '../State'

function Book(state = INIT_STATE.Book, action) {
    switch (action.type) {
        case getType(getBooks.getBooksRequest()):
            return {
                ...state
            }
        case getType(getBooks.getBooksSuccess()):
            return {
                ...state,
                data: action.payload
            }
        case getType(getBooks.getBooksFailure()):
            return {
                ...state
            }
        default:
            return state
    }
}


export default Book