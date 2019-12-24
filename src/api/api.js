import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'ba807922-ecf0-4dd8-8965-d3ef79fe8b9a'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (pageNumber = 1, usersOnPage = 10) => {
        return instance
            .get(`users?page=${pageNumber}&count=${usersOnPage}`, {
                withCredentials: true
            })
            .then(response => response.data)
    },
    setFollow: (userId) => {
        return instance.post('follow/' + userId).then(response => response.data)
    },
    setUnfollow: (userId) => {
        return instance.delete('follow/' + userId).then(response => response.data)
    }
}

export const profileAPI = {
    getUserData: (userId) => {
        return instance.get('profile/' + userId).then(response => response.data)
    },
    getUserStatus : (userId) => {
        return instance.get('profile/status/' + userId).then(response => {
            return response.data;
        })
    },    
    updateUserStatus : (status) => {
       
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    getUserData: () => {
        return instance.get('auth/me').then(response => response.data)
    },
    getUserAvatar : (userId)=> {
        return instance.get('profile/'+ userId).then(response => response.data)
    },
    login : (email, password, rememberMe) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout : () => {
        return instance.delete('auth/login')
    } 

}



