import { authAction, getType } from "../Actions";
import { INIT_STATE } from "../State";

const Auth = (state = INIT_STATE.Auth, action)=>{
    switch (action.type) {
        case getType(authAction.loginRequest()):
            return {
                ...state,
                isLogging: true
            }
        case getType(authAction.loginSuccess()):
            console.log(state);
            return{
                ...state,
                isLogged: true,
                isLogging: false,
                user: action.payload
                
            }
        case getType(authAction.loginFailure()):
            console.log("2");
            return {
                ...state,
                isLogged: false,
                isLogging: false
            }
        case getType(authAction.logout):
            return {
                ...state,
                isLogged: false,
                isLogging: false,
                user: undefined
            }
        default:
            return state
    }
}

export default Auth