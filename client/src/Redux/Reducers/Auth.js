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
            return{
                ...state,
                isLogged: true,
                isLogging: false,
                errorMessage: '',
                user: action.payload.user
                
            }
        case getType(authAction.loginFailure()):
            return {
                ...state,
                isLogged: false,
                isLogging: false,
                errorMessage: action.payload
            }
        case getType(authAction.logout):
            return {
                ...state,
                isLogged: false,
                isLogging: false,
                user: {},
                errorMessage: ''
            }
        default:
            return state
    }
}

export default Auth