import { usersAPI } from '../api/api';

let inititalState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage : 10,
    currentPage : 1,
    isLoading : false,
    followingInProgress : []
}

const usersReducer = (state = inititalState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        
        case SET_USERS : {
            return {...state,users : action.users}
        }
        case CHANGE_PAGE : {
            return {...state,currentPage : action.currentPage}
        }
        case SET_TOTAL_USER_COUNT : {
            return {...state,totalUsersCount : action.count}
        }
        case SET_IS_LOADING : {
            return {...state, isLoading : action.isLoading}
        }
        case SET_FOLLOWING_IN_PROGRESS : {
            return {
                ...state,
                followingInProgress : action.isLoading
                ? [...state.followingInProgress,action.userId]
                : state.followingInProgress.filter( id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}
export default usersReducer;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count});
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading});
export const setFollowingInProgress = (isLoading, userId) => ({ type: SET_FOLLOWING_IN_PROGRESS, isLoading, userId});

export const getUsers = (currentPage, usersOnPage) => (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(changePage(currentPage));
    usersAPI.getUsers(currentPage, usersOnPage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setIsLoading(false));
        })
}

export const setToggleFollow = async (dispatch,userId, method, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));

    let data = await usersAPI[method](userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId)) 
    }
    dispatch(setFollowingInProgress(false,userId))
}

export const setFollowToUser = (userId) => (dispatch) => {
    setToggleFollow(dispatch, userId, 'setFollow', follow);
}
export const setUnfollowToUser = (userId) => (dispatch) => {
    setToggleFollow(dispatch, userId, 'setUnfollow', unfollow);
}

