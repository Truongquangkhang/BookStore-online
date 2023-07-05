import { getType, getContent } from '../Actions'

import { INIT_STATE } from '../State'

function Content(state = INIT_STATE.Content, action) {
    switch (action.type) {
        case getType(getContent.getContentRequest()):
            return {
                ...state
            }
        case getType(getContent.getContentSuccess()):
            console.log('reducer', action.payload);
            return {
                ...state,
                data: action.payload
            }
        case getType(getContent.getContentFailure()):
            return {
                ...state
            }
        default:
            return state
    }
}


export default Content