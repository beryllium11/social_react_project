import {authApi, profileApi, usersApi} from "../api/Api";

const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = "ADD-LIKE-TO-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!", likeCounts: 2},
        {id: 2, message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", likeCounts: 5},
        {id: 3, message: "Version 10.0.17134.765", likeCounts: 0}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCounts: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case ADD_LIKE_TO_POST: {
            return  {
                ...state,
                posts: state.posts.map( p => {
                    if (p.id === action.postId) {
                        let newlikeCounts = p.likeCounts + 1;
                        return  {...p, likeCounts: newlikeCounts}
                    }
                    return p;
                })
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }



};
/*export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};*/
export const likeIncrementAC = (postId) => ({type: ADD_LIKE_TO_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setStatus = (status) => ({type: SET_STATUS, status});



export default profileReducer;
