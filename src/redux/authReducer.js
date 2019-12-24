import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    imgUrl: ''
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
}

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


export const setAuthUserData = (email, userId, login, boolean) => ({ type: SET_AUTH_USER_DATA, data: { email, userId, login, isAuth: boolean } });
export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getUserData()
    if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages[0] ? response.data.messages[0] : 'Some Error';
        dispatch(stopSubmit('loginForm', { _error: message }))
    }
}
export const logout = () => async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            alert('Ошибка во время выхода из соцсети. Вы не вышли.')
        }
}

export default authReducer;
