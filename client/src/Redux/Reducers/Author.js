import { getAuthors, getType } from "../Actions";
import { INIT_STATE } from "../State";

const Author = (state = INIT_STATE.Author, action)=>{
    switch (action.type) {
        case getType(getAuthors.getAuthorsRequest):
            return {
                ...state,
            }
        case getType(getAuthors.getAuthorsSuccess()):
            return{
                ...state,
                data: action.payload
            }
        case getType(getAuthors.getAuthorsFailure()):
            return{
                ...state
            }
    
        default:
            return state
    }
}

export default Author