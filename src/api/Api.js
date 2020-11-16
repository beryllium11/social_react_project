import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../redux/auth-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "95b39fc4-1ea0-4139-8e47-1d64e29cfdac"
    }
});
export const usersApi = {
    getUsers (selectedPage = 1, pageSize = 10) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followDAL (userId) {
        return instance.post(`follow/${userId}`, {}
        ).then(response => {
            return response.data;
        })
    },
    unfollowDAL (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
            return response.data;
        })
    },
    getProfile(userId) {
        console.warn('Old method. Please use profileApi object');
        return profileApi.getProfile(userId);
    }
};
export const profileApi = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status });

    }
};
export const authApi = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

