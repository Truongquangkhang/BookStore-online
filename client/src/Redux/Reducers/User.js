import { getusers, getType } from "../Actions";
import { INIT_STATE } from "../State";

const User = (state = INIT_STATE.User, action)=>{
    switch (action.type) {
        case getType(getusers.getUsersRequest):
            return {
                ...state
            }
        case getType(getusers.getUsersSuccess()):
            return{
                ...state,
                data: action.payload
            }
        case getType(getusers.getUsersFailure()):
            return{
                ...state
            }
    
        default:
            return state
    }
}

export default User