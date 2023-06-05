import { getCategories, getType } from "../Actions";
import { INIT_STATE } from "../State";

const Category = (state=INIT_STATE.Category, action)=>{
    switch (action.type) {
        case getType(getCategories.getCategoriesRequest):
            return {
                ...state,
            }
        case getType(getCategories.getCategoriesSuccess()):
            return{
                ...state,
                data: action.payload
            }
        case getType(getCategories.getCategoriesFailure()):
            return{
                ...state
            }
    
        default:
            return state
    }
}


export default Category