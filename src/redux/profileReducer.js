const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE_TO_POST = "ADD-LIKE-TO-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!", likeCounts: 2},
        {id: 2, message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", likeCounts: 5},
        {id: 3, message: "Version 10.0.17134.765", likeCounts: 0}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }



};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const likeIncrementAC = (postId) => ({type: ADD_LIKE_TO_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;
