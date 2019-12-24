export const getUserProfile = (state) => {
    return state.profilePage.profileData;
}
export const getUserStatusSel = (state) => {
    return state.profilePage.userStatus;
}
export const getAuthUserId= (state) => {
    return state.auth.userId;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}