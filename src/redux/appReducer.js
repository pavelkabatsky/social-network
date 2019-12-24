
import { getAuthUserData } from './authReducer'

const INIT_SUCCESS = 'INIT_SUCCESS';
let initialState = {
    isInitialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_SUCCESS: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default:
            return state;
    }
}

const initSuccess = () => ({ type: INIT_SUCCESS })

export const initApp = () => (dispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initSuccess())
        })
}

export default appReducer;
