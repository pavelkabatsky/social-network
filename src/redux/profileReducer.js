import { profileAPI } from "../api/api";

let inititalState = {
    posts: [
        { id: 1, postText: 'Hi! How are you?', likeCount: '15' },
        { id: 2, postText: 'Hello! This is my first post here.', likeCount: '8' }
    ],
    profileData: null,
    userStatus: 'Enter your status'
}

const profileReducer = (state = inititalState, action) => {

    switch (action.type) {

        case 'NEW-POST': {
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts]
            stateCopy.posts.unshift({
                id: 5,
                postText: action.text,
                likeCount: 0
            })
            return stateCopy;
        }

        case 'SET_USER_PROFILE': {
            return { ...state, profileData: action.profile }
        }
        case 'SET_USER_STATUS': {
            return { ...state, userStatus: action.status }
        }
        case 'UPDATE_USER_STATUS': {
            return { ...state, userStatus: action.status }
        }

        default:
            return state;
    }

}
export default profileReducer;

const NEW_POST = 'NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

export const newPostActionCreator = (text) => ({ type: NEW_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const updateUserStatus = (status) => ({ type: UPDATE_USER_STATUS, status });

export const getUserData = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserData(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(data));
}

export const updateUserStatusRequest = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

