const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USER-COUNT';

let initialState = {
    users: [
   ],
    pageSize: 6,
    totalUsersCount: 30,
    selectedPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:  {
             return {...state, users: action.users}
            }
        case SET_CURRENT_PAGE:  {
            return {...state, selectedPage: action.curPage}
        }
        case SET_TOTAL_USERS_COUNT:  {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
};


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setSelectedPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, curPage: currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});

export default usersReducer;
